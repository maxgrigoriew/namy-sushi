<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    categories: {
      type: Array,
    },
  },
})
</script>
<template>
  <div>
    <ul class="product list-reset">
      <is-product-list-item
        @incrementCountProduct="$emit('incrementCountProduct', item.name)"
        @decrementCountProduct="$emit('decrementCountProduct', item.name)"
        :category="item"
        v-for="item in categories"
        :key="item.id"
        >1</is-product-list-item
      >
    </ul>
  </div>
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
