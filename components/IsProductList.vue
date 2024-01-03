<script>
export default {}
</script>
<template>
  <ul class="product list-reset">
    <is-product-list-item
      v-for="item in 10"
      :key="item"
      class="product__list-item"
      >1</is-product-list-item
    >
  </ul>
</template>
<style lang="scss">
.product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
</style>
