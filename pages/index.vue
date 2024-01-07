<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      count: 0,
      cartRef: null,
      orderRef: null,

      orderForm: {
        user: '',
        phone: '',
        info: '',
      },
    }
  },
  methods: {
    openCartModal() {
      this.cartRef.open()
    },
    closeCartModal() {
      this.cartRef.close()
    },
    openOrderModal() {
      this.orderRef.open()
    },
  },
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
        info: {
          required,
        },
      },
    }
  },
}
</script>

<template>
  <div class="page">
    <is-header @openModal="openCartModal" />
    <div class="container">
      <is-menu-tab class="tab-menu" />
      <is-product-list />
      <is-scroll-button v-scroll-to-top />

      <!-- <is-modal ref="cartRef">
        <template v-slot:header>Корзина</template>
        <template v-slot:middle>
          <is-cart-list />
        </template>
        <template v-slot:bottom>
          <is-cart-price-block
            @back="closeCartModal"
            @next="closeCartModal(), openOrderModal()"
          />
        </template>
      </is-modal> -->
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
                    <svg width="30" height="30">
                      <use xlink:href="@/assets/images/sprite.svg#deliver" />
                    </svg>
                  </template>
                  <template #variant> Курьер </template>
                  <template #description> Временно недоступно </template>
                </is-checkbox-field>
                <is-checkbox-field>
                  <template #checkbox> <is-checkbox /> </template>
                  <template #icon>
                    <svg width="30" height="30">
                      <use xlink:href="@/assets/images/sprite.svg#bag" />
                    </svg>
                  </template>
                  <template #variant> Самовывоз </template>
                  <template #description>
                    <div class="checkbox-field-percent">
                      <p>Скидка - 10%</p>
                      <p>на стоиомость покупки</p>
                    </div>
                  </template>
                </is-checkbox-field>
              </template>
            </is-order-item>

            <is-order-item :counter="2">
              <template #header> Данные для доставки</template>
              <template #middle>
                <is-input v-model.trim="orderForm.user">
                  <svg>
                    <use xlink:href="@/assets/images/sprite.svg#user" />
                  </svg>
                </is-input>
                <span class="msg-error" v-if="!$v.orderForm.user.maxLength">
                  <small>минаммальной число </small>
                </span>
                <!-- <span class="msg-error" v-if="!$v.orderForm.user.email">
                  <small>email is required</small>
                </span> -->
                <is-input v-model.trim="orderForm.phone">
                  <svg>
                    <use xlink:href="@/assets/images/sprite.svg#phone" />
                  </svg>
                </is-input>
                <is-input v-model.trim="orderForm.info">
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
.tab-menu {
  padding-bottom: 60px;
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

  &__link {
    color: #185598;
  }
}

.msg-error {
  color: red;
}
</style>
