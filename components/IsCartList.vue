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
