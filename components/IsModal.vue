<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { expose }) {
    const isOpenModal = ref(true)
    const open = () => (isOpenModal.value = true)
    const close = () => (isOpenModal.value = false)

    expose({ close, open })
    return {
      isOpenModal,
      close,
      open,
    }
  },
})
</script>
<template>
  <transition name="fade">
    <div v-if="isOpenModal" class="login" @click="close">
      <div class="login__inner" @click.stop>
        <h3 class="login__title">
          <slot name="header" />
        </h3>
        <slot name="middle"></slot>
        <slot name="bottom"></slot>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.login {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.5);

  &__inner {
    max-width: 614px;
    margin-left: auto;
    height: 100%;
    padding: 30px 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #ebe1d7;
  }

  &__title {
    margin-bottom: 33px;
    font-size: 48px;
    color: var(--brown);
    text-transform: uppercase;
    text-align: center;

    &::before,
    &::after {
      display: inline-block;
      vertical-align: middle;
      margin-bottom: 5px;
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--brown);
    }

    &::before {
      margin-right: 40px;
    }

    &::after {
      margin-left: 40px;
    }
  }
}
</style>
