<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { expose }) {
    const isOpenModal = ref(false)
    const toggle = () => {
      document.querySelector('body').classList.toggle('active')
      isOpenModal.value = true
    }
    const open = () => (isOpenModal.value = true)
    const close = () => {
      document.querySelector('body').classList.remove('active')
      isOpenModal.value = false
    }

    expose({ close, open, toggle })
    return {
      isOpenModal,
      close,
      open,
      toggle,
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
    padding: 30px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #ebe1d7;
  }

  &__title {
    margin-bottom: 33px;
    font-size: 44px;
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

@media (max-width: 1024px) {
  .login {
    &__inner {
      padding: 10px;
      max-width: 400px;
    }

    &__title {
      font-size: 30px;

      &::before {
        margin-right: 20px;
      }

      &::after {
        margin-left: 20px;
      }
    }
  }
}

@media (max-width: 520px) {
  .login {
    &__inner {
      padding: 15px;
      max-width: 280px;
    }

    &__title {
      font-size: 20px;
      margin-bottom: 20px;
      &::before {
        margin-right: 10px;
      }

      &::after {
        margin-left: 10px;
      }
    }
  }
}
</style>
