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

      <is-modal ref="cartRef">
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
      </is-modal>
      <!-- price-modal -->
      <is-modal ref="orderRef">
        <template v-slot:header>Оформить заказ</template>
        <template v-slot:middle>
          <is-cart-price-block @back="closeOrderModal" />
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
</style>
