<script>
import { ref } from 'vue'

export default {
  props: {
    favorite: {
      type: Object,
    },
  },
  setup(_, { emit }) {
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
  <li class="cart-item" :class="{ active: count > 0 }">
    <img
      class="cart-item__img"
      :src="require(`@/assets/images/${favorite.img}`)"
      :alt="`${favorite.name}`"
    />

    <div class="cart-item__content">
      <div class="cart-item__top">
        <span class="cart-item__title">{{ favorite.title }}</span>
      </div>
      <p class="cart-item__text">
        {{ favorite.info }}
      </p>
    </div>
    <div class="cart-item__bottom">
      <p class="cart-item__price">
        <span>Цена</span><span>{{ favorite.price }} ₽</span>
      </p>
      <div class="cart-item__counters">
        <is-button class="cart-item__increment" @click="decrementCount">
          <template v-slot:icon>
            <svg width="16" height="16">
              <use xlink:href="@/assets/images/sprite.svg#minus" />
            </svg>
          </template>
        </is-button>
        <span class="cart-item__count">{{ count }}</span>
        <is-button class="cart-item__decrement" @click="incrementCount">
          <template v-slot:icon>
            <svg width="16" height="16">
              <use xlink:href="@/assets/images/sprite.svg#plus" />
            </svg>
          </template>
        </is-button>
      </div>
      <p class="cart-item__price">
        <span>Сумма</span><span>{{ favorite.price }} ₽</span>
      </p>
    </div>
    <button is-dark class="cart-item__delete">
      <svg width="16" height="16">
        <use xlink:href="@/assets/images/sprite.svg#backet" />
      </svg>
    </button>
  </li>
</template>
<style lang="scss">
.cart-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px;
  padding-right: 60px;
  background: #fafafa;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: all var(--transition);
  cursor: default;
  &__img {
    position: relative;
    display: block;
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 25px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    align-self: flex-start;
    max-width: 200px;
    margin-right: 25px;
  }

  &__title {
    color: var(--black);
    font-size: 16px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    margin-bottom: 10px;
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
    font-size: 13px;
    letter-spacing: 0.52px;
    font-style: normal;
    margin-bottom: 5px;
  }

  &__bottom {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__decrement {
    padding: 6px !important;
  }
  &__increment {
    padding: 6px !important;
  }

  &__price {
    color: var(--black);
    display: inline-flex;
    gap: 10px;
    & span:first-child {
      font-size: 13px;
      letter-spacing: 0.65px;
      align-self: center;
    }
    & span:last-child {
      font-size: 16px;
      letter-spacing: 0.8px;
    }
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

  &__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 44px;
    padding-left: 4px;
    height: 60px;
    border: none;
    background-color: var(--brown);
    border-top-left-radius: 200px;
    border-bottom-left-radius: 200px;
    cursor: pointer;
  }
}

@media (max-width: 1024px) {
  .cart-item {
    flex-direction: column;
    gap: 10px;
    padding-right: 50px;
    &__img {
      margin-right: auto;
    }
    &__content {
      margin-right: 0;
    }
    &__bottom {
      flex-direction: row;
      align-items: center;
      margin-left: 0;
      gap: 10px;
    }

    &__counters {
      gap: 10px;
    }
    &__price {
      gap: 6px;

      & span:last-child {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 520px) {
  .cart-item {
    &__img {
      width: 60px;
      height: 60px;
    }

    &__title {
      font-size: 14px;
    }

    &__text {
      font-size: 12px;
    }

    &__bottom {
      gap: 10px;
      flex-direction: column;
      align-self: flex-start;
      align-items: flex-start;
    }

    &__delete {
      height: 44px;
    }
  }
}
</style>
