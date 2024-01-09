<script>
import { ref } from 'vue'

export default {
  props: {
    category: {
      type: Object,
    },
  },
  setup(props, { emit }) {
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
  <li class="product-item" :class="{ active: count > 0 }">
    <div class="product-item__img">
      <img :src="require(`../assets/images/${category.img}`)" alt="" />
    </div>
    <div class="product-item__top">
      <span class="product-item__title">{{ category.name }}</span>
      <span class="product-item__weight"> {{ category.weight }} г</span>
    </div>
    <p class="product-item__text">
      {{ category.info }}
    </p>
    <div class="product-item__bottom">
      <span class="product-item__price">{{ category.price }} ₽</span>
      <is-button
        v-if="isCart"
        class="product-item__button"
        is-rectangle
        @click="changeIsCart(), incrementCount()"
        >В корзину</is-button
      >
      <div v-else class="product-item__counters">
        <is-button class="product-item__increment" @click="decrementCount">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.3333 8.00012H2.66666"
                stroke="#2A344A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </is-button>
        <span class="product-item__count">{{ count }}</span>
        <is-button class="product-item__decrement" @click="incrementCount">
          <template v-slot:icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.5556 8.0001H4.44446M8.00001 11.5556V4.44446"
                stroke="#2A344A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </is-button>
      </div>
    </div>
  </li>
</template>
<style lang="scss">
.product-item {
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fafafa;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: all var(--transition);
  cursor: default;

  &.active {
    background-color: var(--brown);

    .product-item__title,
    .product-item__text,
    .product-item__weight,
    .product-item__count,
    .product-item__price {
      color: var(--light);
    }
    .product-item__img img {
      filter: drop-shadow(15px 12px 20px rgba(203, 182, 137, 0.7));
    }
  }

  &__img {
    position: relative;
    display: block;
    width: 130px;
    height: 130px;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    img {
      width: 100%;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__title {
    color: var(--black);
    font-size: 19px;
    letter-spacing: 1.9px;
    text-transform: uppercase;
  }

  &__weight {
    font-family: Arial;
    font-style: normal;
    font-size: 13px;
    letter-spacing: 0.52px;
    color: var(--gray);
  }

  &__text {
    color: var(--gray);
    font-family: Arial;
    font-size: 15px;
    letter-spacing: 0.6px;
    font-style: normal;
    margin-bottom: 30px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  &__price {
    color: var(--black);
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.95px;
  }

  &__button {
    font-family: 'Montserrat' !important;
    background: red;
  }

  &__counters {
    display: inline-flex;
    align-items: center;
    gap: 13px;
  }
}

@media (max-width: 520px) {
  .product-item {
    padding: 20px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;

    &__img {
      width: 80px;
      height: 80px;
      margin-bottom: 15px;
    }

    &__top {
      margin-bottom: 10px;
    }
    &__text {
      margin-bottom: 10px;
    }
  }
}
</style>
