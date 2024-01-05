<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const cartRef = ref(null)
    const orderRef = ref(null)

    const openCartModal = () => {
      cartRef.value.open()
    }
    const closeCartModal = () => {
      cartRef.value.close()
    }
    const openOrderModal = () => {
      console.log('123')
      orderRef.value.open()
    }

    return {
      count,
      openOrderModal,
      openCartModal,
      closeCartModal,
      cartRef,
      orderRef,
    }
  },
})
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
</style>
