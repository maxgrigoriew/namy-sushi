<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
    },
  },

  setup(props, { emit }) {
    return {}
  },
})
</script>
<template>
  <label class="input-form">
    <span class="input-form__icon">
      <slot></slot>
    </span>
    <input
      id="input"
      class="input-form__field"
      name="color"
      type="input"
      placeholder
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<style lang="scss" scoped>
.input-form {
  position: relative;
  padding-bottom: 2px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-radius: 8px;
    background: #d9d9d9;
  }

  &__field {
    border: none;
    width: 100%;
    padding: 8px 10px 8px 40px;
    color: #4c4c4c;
    font-family: Ubuntu, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;

    &::placeholder {
    }
  }

  &__icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
