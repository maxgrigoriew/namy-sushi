<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    categories: {
      type: Array,
    },
  },
  setup(_, { emit }) {
    const addCategory = (category) => {
      console.log(category)
      emit('addCategory', category)
    }

    return {
      addCategory,
    }
  },
})
</script>
<template>
  <ul class="product list-reset">
    <is-product-list-item
      @addCategory="addCategory"
      :category="item"
      v-for="item in categories"
      :key="item.id"
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
