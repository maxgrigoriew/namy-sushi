<script>
import { ref, defineComponent, reactive, computed } from 'vue'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default defineComponent({
  validations() {
    return {
      orderForm: {
        user: {
          required,
          email,
          minLength: minLength(3),
        },
        phone: {
          required,
        },
      },
    }
  },
  setup() {
    const cartRef = ref(null)
    const selectedCategory = ref('rolly')
    const orderRef = ref(null)
    const favoriteCount = computed(() => {
      let count = 0
      categories.value.forEach(item => {
        if (item.count) {
          count += 1
        }
      })

      return count
    })

    const orderForm = reactive({
      user: '',
      phone: '',
      info: '',
    })
    const categories = ref([
      {
        id: 'rolly',
        img: 'product-1.webp',
        name: 'ТОСУИ',
        info: 'рис, нори, тобико оранжевая, майонез, салат, паприка, жареная креветка',
        price: 310,
        weight: '190',
        count: 0,
      },
      {
        id: 'rolly',
        img: 'product-2.webp',
        name: 'САППОРО',
        info: 'рис, нори, майонез, томаго , огурец, авокадо, угорь',
        price: 350,
        weight: '390',
        count: 0,
      },
      {
        id: 'rolly',
        img: 'product-3.webp',
        name: 'ИНЬ-ЯНЬ',
        info: 'рис, нори, тунец, паприка, лосось, авокадо',
        price: 340,
        weight: '320',
        count: 0,
      },
      {
        id: 'sushi',
        img: 'product-4.webp',
        name: 'Филадельфия',
        info: 'рис, нори, майонез, краб, огурец, авокадо, тобико оранжева',
        price: 400,
        weight: '350',
        count: 0,
      },
      {
        id: 'sushi',
        img: 'product-5.webp',
        name: 'КУНСЕЙ БАТАКОН',
        info: 'рис, нори, острый соус, помидор, огурец, бекон, копченый лосось',
        price: 380,
        weight: '340',
        count: 0,
      },
      {
        id: 'sets',
        img: 'product-6.webp',
        name: 'КАЛИФОРНИЯ',
        info: 'рис, нори, майонез, краб, огурец, авокадо, тобико оранжева',
        price: 400,
        weight: '350',
        count: 0,
      },
      {
        id: 'sets',
        img: 'product-7.webp',
        name: 'Европа',
        info: 'рис, нори, майонез, краб, огурец, авокадо, тобико оранжева',
        price: 320,
        weight: '330',
        count: 0,
      },
      {
        id: 'rice_noodles',
        img: 'product-8.webp',
        name: 'СВИНИНА В ОСТРОМ СОУСЕ',
        info: 'свинина, фирменный сычуаньский соус',
        price: 269,
        weight: '340',
        count: 0,
      },
      {
        id: 'salads',
        img: 'product-9.webp',
        name: 'Салат Курица с ананасом',
        info: 'помидор, огурец, бекон, копченый лосось',
        price: 169,
        weight: '340',
        count: 0,
      },
      {
        id: 'hot_food',
        img: 'product-10.webp',
        name: 'ТИГРОВЫЕ КРЕВЕТКИ ПО-КРЕОЛЬСКИ',
        info: 'Тигровые Креветки по-креольски ( в соусе шрирача) 10 шт.',
        price: 380,
        weight: '340',
        count: 0,
      },
    ])

    const openCartModal = () => {
      cartRef.value.open()
    }
    const toggleCartModal = () => {
      cartRef.value.toggle()
    }
    const closeCartModal = () => {
      cartRef.value.close()
    }
    const openOrderModal = () => {
      orderRef.value.open()
    }

    const incrementCountProduct = name => {
      const elem = categories.value.find(
        item => name.toLowerCase() === item.name.toLowerCase()
      )
      if (elem) {
        elem.count += 1
      }
    }
    const decrementCountProduct = name => {
      const elem = categories.value.find(
        item => name.toLowerCase() === item.name.toLowerCase()
      )
      if (elem) {
        elem.count -= 1
      }
    }
    const clearCountProduct = name => {
      const elem = categories.value.find(
        item => name.toLowerCase() === item.name.toLowerCase()
      )
      if (elem) {
        elem.count = 0
      }
    }

    const changeActiveTab = tab => {
      selectedCategory.value = tab
    }

    const favoriteCategories = computed(() => {
      return categories.value.filter(item => item.count !== 0)
    })

    const totalAmount = computed(() => {
      let count = 0
      favoriteCategories.value.forEach(product => {
        count += product.price * product.count
      })

      return count
    })

    const filterSelectedCategory = computed(() => {
      return categories.value.filter(
        item => item.id.toLowerCase() === selectedCategory.value
      )
    })

    return {
      orderForm,
      orderRef,
      cartRef,
      openCartModal,
      closeCartModal,
      openOrderModal,
      toggleCartModal,
      categories,
      favoriteCount,
      decrementCountProduct,
      incrementCountProduct,
      favoriteCategories,
      clearCountProduct,
      totalAmount,
      filterSelectedCategory,
      selectedCategory,
      changeActiveTab,
    }
  },
})
</script>

<template>
  <div class="page">
    <is-header @openModal="toggleCartModal" :favoriteCount="favoriteCount" />
    <div class="container">
      <is-menu-tab
        class="tab-menu"
        @changeTab="changeActiveTab"
        :selectedCategory="selectedCategory"
      />
      <is-product-list
        :categories="filterSelectedCategory"
        @decrementCountProduct="decrementCountProduct"
        @incrementCountProduct="incrementCountProduct"
      />
      <is-scroll-button v-scroll-to-top />

      <is-modal ref="cartRef">
        <template v-slot:header>Корзина</template>
        <template v-slot:middle>
          <is-cart-list
            v-if="favoriteCategories.length"
            :favorites="favoriteCategories"
            @decrementCountProduct="decrementCountProduct"
            @incrementCountProduct="incrementCountProduct"
            @clearCountProduct="clearCountProduct"
          />
          <div style="text-align: center" v-else>Корзина пуста</div>
        </template>
        <template v-slot:bottom>
          <is-cart-price-block
            style="margin-top: auto"
            @back="closeCartModal"
            @next="closeCartModal(), openOrderModal()"
            :disabled="!favoriteCount"
            :totalAmount="totalAmount"
          />
        </template>
      </is-modal>
      <!-- price-modal -->
      <is-modal ref="orderRef">
        <template #header>Оформить заказ</template>
        <template #middle>
          <div class="cart-order-list">
            <is-order-item :counter="1">
              <template #header> Способ доставки</template>
              <template #middle>
                <is-checkbox-field>
                  <template #checkbox> <is-checkbox /> </template>
                  <template #icon>
                    <svg>
                      <use xlink:href="@/assets/images/sprite.svg#deliver" />
                    </svg>
                  </template>
                  <template #variant> Курьер </template>
                  <template #description> Временно недоступно </template>
                </is-checkbox-field>
                <is-checkbox-field>
                  <template #checkbox> <is-checkbox /> </template>
                  <template #icon>
                    <svg>
                      <use xlink:href="@/assets/images/sprite.svg#bag" />
                    </svg>
                  </template>
                  <template #variant> Самовывоз </template>
                  <template #description>
                    <div class="checkbox-field-percent">
                      <p>Скидка - 10%</p>
                      <p>на стоимость покупки</p>
                    </div>
                  </template>
                </is-checkbox-field>
              </template>
            </is-order-item>

            <is-order-item :counter="2">
              <template #header> Данные для доставки</template>
              <template #middle>
                <is-input v-model.trim="orderForm.user" placeholder="Имя">
                  <svg>
                    <use xlink:href="@/assets/images/sprite.svg#user" />
                  </svg>
                  <template #error>
                    <span class="msg-error" v-if="!$v.orderForm.user.minLength">
                      <small>Длина имени должна быть не менее 3</small>
                    </span>
                    <span class="msg-error" v-if="!$v.orderForm.user.required">
                      <small>Это обязательное поле</small>
                    </span>
                  </template>
                </is-input>

                <is-input
                  v-model.trim="orderForm.phone"
                  v-mask="'+7 (___) ___ __ __'"
                  placeholder="Телефон"
                >
                  <svg>
                    <use xlink:href="@/assets/images/sprite.svg#phone" />
                  </svg>

                  <template #error>
                    <span class="msg-error" v-if="!$v.orderForm.phone.required">
                      <small>Это обязательное поле</small>
                    </span>
                  </template>
                </is-input>
                <is-input
                  v-model.trim="orderForm.info"
                  placeholder="Дополнительная информация"
                >
                  <svg>
                    <use xlink:href="@/assets/images/sprite.svg#info" />
                  </svg>
                </is-input>
              </template>
            </is-order-item>

            <is-order-item>
              <template #middle>
                <ul class="order-table list-reset">
                  <li class="order-table__item">
                    <div class="order-table__item-title">Cтоимость товаров</div>
                    <div class="order-table__item-price">450 ₽</div>
                  </li>
                  <li class="order-table__item">
                    <div class="order-table__item-title">Итого к оплате</div>
                    <div class="order-table__item-price">450 ₽</div>
                  </li>
                </ul>
              </template>
              <template #bottom>
                <is-button
                  class="order-button"
                  is-dark
                  is-fill
                  is-rectangle
                  is-blue
                  >Купить и оплатить</is-button
                >

                <p class="order-personal">
                  Создавая заказ, вы соглашаетесь с
                  <a class="order-personal__link" href="#"
                    >политикой обработки персональных данных</a
                  >
                </p>
              </template>
            </is-order-item>
          </div>
        </template>
      </is-modal>
    </div>
  </div>
</template>

<style lang="scss">
.page {
  min-height: 100vh;
  padding-bottom: 160px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #243139;
  }
}

.checkbox-field-percent {
  display: flex;
  flex-direction: column;
  color: #3f4871;
  font-weight: 700;

  & p:first-child {
    font-size: 14px;
  }
  & p:last-child {
    font-size: 8px;
  }
}

.cart-order-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.order-table {
  display: grid;
  gap: 20px;
  padding: 0 40px 40px 0;

  &__item {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 160px 1fr;
    gap: 45px;
    color: #222;
    font-family: Ubuntu, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;

    &:first-child {
      padding-bottom: 20px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-radius: 8px;
        background: #d9d9d9;
      }

      & .order-table__item-title {
        font-weight: 300;
      }
    }
  }
}
.order-button {
  font-size: 18px !important;
}
.order-personal {
  padding-top: 20px;
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  font-family: var(--ubuntu);

  &__link {
    color: #185598;
  }
}

.msg-error {
  color: red;
  font-family: var(--ubuntu);
}

@media (max-width: 520px) {
  .checkbox-field-percent {
    & p:first-child {
      font-size: 10px;
    }
    & p:last-child {
      display: none;
    }
  }

  .order-table {
    padding: 0 0px 20px 0;
    margin-top: -20px;
    &__item {
      grid-template-columns: none;
      gap: 20px;
      &-title {
        font-size: 14px;
      }
      &-price {
        font-size: 14px;
      }

      &:first-child {
        padding-bottom: 10px;
      }
    }
  }

  .msg-error {
    font-size: 12px;
  }
  .order-button {
    font-size: 14px !important;
  }
}
</style>
