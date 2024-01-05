<script>
export default {}
</script>
<template>
  <ul class="cart-list list-reset">
    <is-cart-list-item
      v-for="item in 10"
      :key="item"
      class="cart__list-item"
    ></is-cart-list-item>
  </ul>
</template>
<style lang="scss">
.cart-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 5px;
}
</style>
