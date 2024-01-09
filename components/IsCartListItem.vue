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
    <img class="cart-item__img" src="./../assets/images/product-1.png" alt="" />
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <g clip-path="url(#clip0_1_1111)">
          <path
            d="M13.9285 2.14286H10.1785V1.60714C10.1785 0.71954 9.45898 0 8.57138 0H6.42852C5.54092 0 4.82138 0.71954 4.82138 1.60714V2.14286H1.07137C0.775492 2.14286 0.535645 2.38271 0.535645 2.67859C0.535645 2.97446 0.775523 3.21428 1.07137 3.21428H1.65368L2.67851 14.513C2.70378 14.7897 2.93641 15.0011 3.21423 15H11.7857C12.0635 15.0011 12.2961 14.7897 12.3214 14.513L13.3462 3.21428H13.9285C14.2244 3.21428 14.4643 2.97443 14.4643 2.67856C14.4643 2.38268 14.2244 2.14286 13.9285 2.14286ZM5.89279 1.60714C5.89279 1.31126 6.13264 1.07142 6.42852 1.07142H8.57138C8.86726 1.07142 9.10711 1.31126 9.10711 1.60714V2.14286H5.89283V1.60714H5.89279ZM11.2966 13.9285H3.70335L2.73209 3.21428H5.3571H12.2705L11.2966 13.9285Z"
            fill="white"
          />
          <path
            d="M5.89285 12.2855C5.89279 12.2848 5.89276 12.2841 5.8927 12.2833L5.35697 4.78335C5.33597 4.48748 5.07908 4.26467 4.78323 4.28567C4.48735 4.30667 4.26455 4.56356 4.28555 4.85941L4.82128 12.3594C4.84127 12.6403 5.07537 12.8578 5.357 12.8571H5.39558C5.69074 12.8366 5.91338 12.5807 5.89285 12.2855Z"
            fill="white"
          />
          <path
            d="M7.50008 4.28564C7.2042 4.28564 6.96436 4.52549 6.96436 4.82137V12.3214C6.96436 12.6172 7.2042 12.8571 7.50008 12.8571C7.79596 12.8571 8.0358 12.6172 8.0358 12.3214V4.82137C8.0358 4.52549 7.79596 4.28564 7.50008 4.28564Z"
            fill="white"
          />
          <path
            d="M10.2164 4.28567C9.92051 4.26467 9.66366 4.48748 9.64266 4.78335L9.10693 12.2833C9.08524 12.5784 9.30685 12.8352 9.60191 12.8569C9.60282 12.8569 9.6037 12.857 9.60461 12.8571H9.64266C9.92428 12.8578 10.1584 12.6403 10.1784 12.3594L10.7141 4.85941C10.7351 4.56356 10.5123 4.3067 10.2164 4.28567Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1111">
            <rect width="15" height="15" fill="white" />
          </clipPath>
        </defs>
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
      gap: 20px;
    }

    &__price {
      gap: 6px;
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
