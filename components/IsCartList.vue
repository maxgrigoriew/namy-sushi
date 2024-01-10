<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    favorites: {
      type: Array,
    },
  },
})
</script>
<template>
  <ul class="cart-list list-reset">
    <is-cart-list-item
      :favorite="favorite"
      @incrementCountProduct="$emit('incrementCountProduct', favorite.name)"
      @decrementCountProduct="$emit('decrementCountProduct', favorite.name)"
      @clearCountProduct="$emit('clearCountProduct', favorite.name)"
      v-for="favorite in favorites"
      :key="favorite.id"
      class="cart__list-item"
    />
  </ul>
</template>
<style lang="scss">
.cart-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 5px;
  padding: 10px;
}
</style>
