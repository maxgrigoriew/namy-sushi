<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
    category: {
      type: Object,
    },
  },
  setup(_, { emit }) {
    const isCart = ref(true)
    return {
      isCart,
    }
  },
})
</script>
<template>
  <li class="product-item" :class="{ active: category.count > 0 }">
    <div class="product-item__img">
      <img
        :src="require(`@/assets/images/${category.img}`)"
        :alt="`${category.name}`"
      />
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
        v-if="!category.count"
        class="product-item__button"
        is-rectangle
        @click="$emit('incrementCountProduct', category.name)"
        >В корзину</is-button
      >
      <div v-else class="product-item__counters">
        <is-button
          class="product-item__increment"
          @click="$emit('decrementCountProduct', category.name)"
        >
          <template v-slot:icon>
            <svg width="16" height="16">
              <use xlink:href="@/assets/images/sprite.svg#minus" />
            </svg>
          </template>
        </is-button>
        <span class="product-item__count">{{ category.count }}</span>
        <is-button
          class="product-item__decrement"
          @click="$emit('incrementCountProduct')"
        >
          <template v-slot:icon>
            <svg width="16" height="16">
              <use xlink:href="@/assets/images/sprite.svg#plus" />
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
