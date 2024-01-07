<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    counter: {
      type: String,
      default: '',
    },
  },
})
</script>
<template>
  <div class="order-item">
    <div v-if="$slots.header" class="order-item__title">
      <span v-if="counter" class="order-item__count"> {{ counter }}</span>
      <slot name="header"></slot>
    </div>
    <div class="order-item__middle">
      <slot name="middle"></slot>
    </div>
    <div class="order-item__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.order-item {
  padding: 20px;
  border-radius: 8px;
  background: var(--light);

  &__title {
    position: relative;
    color: #191919;
    font-family: Ubuntu;
    font-size: 22px;
    font-weight: 300;
    padding: 0 40px;
  }

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: var(--accent);
    border-radius: 50%;
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: var(--light);
  }

  &__middle {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0 0 40px;
  }

  &__middle {
  }
}
</style>
