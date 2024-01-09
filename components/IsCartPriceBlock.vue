<script>
import { ref } from 'vue'

export default {
  props: {},
  setup(props) {
    const isCart = ref(true)
    const count = ref(0)
    const incrementCount = () => {
      count.value++
    }
    const decrementCount = () => {
      if (count.value > 0) {
        count.value--
      }
    }

    const changeIsCart = () => (isCart.value = !isCart.value)
    return {
      isCart,
      changeIsCart,
      incrementCount,
      decrementCount,
      count,
    }
  },
}
</script>
<template>
  <div class="total-amount">
    <p class="total-amount__price">
      <span class="total-amount__title">Общая сумма</span>
      <span class="total-amount__sum">16995 ₽</span>
    </p>
    <p class="total-amount__text">
      Сумма заказа для доставки курьером должна составлять не менее 500 ₽
    </p>
    <div class="total-amount__buttons">
      <isButton is-rectangle class="btn" @click="$emit('back')"
        >Вернуться к покупкам</isButton
      >
      <isButton is-rectangle class="btn" @click="$emit('next')"
        >Оформить заказ</isButton
      >
    </div>
  </div>
</template>
<style lang="scss">
.total-amount {
  &__price {
    margin: auto 0 40px;
    display: inline-flex;
    padding-top: 20px;
    align-items: flex-end;
    gap: 10px;

    &-title {
      font-size: 20px;
      letter-spacing: 1px;
    }
    &-sum {
      font-size: 22px;
      letter-spacing: 1.1px;
    }
  }
  &__buttons {
    display: inline-flex;
    gap: 30px;
    align-self: flex-start;
  }
  &__text {
    position: relative;
    padding-left: 16px;
    color: var(--dark);
    max-width: 360px;
    font-family: 'Ubuntu';
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0.48px;
    margin-bottom: 40px;

    &::before {
      content: '*';
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      margin-right: 8px;
    }
  }
}

@media (max-width: 520px) {
  .total-amount {
    &__price {
      margin-bottom: 10px;
    }
    &__text {
      margin-bottom: 10px;
    }
    &__buttons {
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
