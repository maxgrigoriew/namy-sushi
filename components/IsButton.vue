<script>
import { onMounted, computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    isLarge: {
      type: Boolean,
      default: false,
    },
    isRectangle: {
      type: Boolean,
      default: false,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  emits: 'click',
  setup(props, { slots }) {
    const showIcon = computed(() => !!slots.icon)
    onMounted(() => {})
    return {
      showIcon,
    }
  },
})
</script>
<template>
  <button
    class="btn"
    :class="[
      { circle: showIcon },
      { 'btn--large': isLarge },
      { 'btn--rectangle': isRectangle },
      { 'btn--dark': isDark },
    ]"
    @click="$emit('click')"
  >
    <slot />
    <slot v-if="showIcon" name="icon" />
  </button>
</template>
<style lang="scss" scoped>
.btn {
  display: inline-flex;
  padding: 13px 30px;
  align-items: center;
  justify-content: center;
  background: transparent;
  line-height: 1;
  border: none;
  background-color: var(--light);
  border-radius: 30px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all var(--transition);
  white-space: nowrap;

  &:hover {
    background-color: var(--brown);
    color: var(--light);
  }
  &--large {
    padding: 16px 32px;
    font-size: 21px;
  }

  &--rectangle {
    color: var(--light);
    border-radius: 8px;
    background: var(--brown);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
    font-family: var(--montserrat) !important;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;

    &:hover {
      background-color: var(--light);
      color: var(--brown);
    }
  }

  &--dark {
    color: var(--light);
    background-color: var(--brown);
  }
}

.circle {
  border-radius: 50%;
  padding: 9px;

  & svg path {
    transition: all var(--transition);
  }

  &:hover {
    & svg path {
      fill: var(--light);
    }
  }
}
</style>
