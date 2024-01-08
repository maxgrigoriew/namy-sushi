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

@media (max-width: 1024px) {
  .product {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .product {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .product {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
}
</style>
