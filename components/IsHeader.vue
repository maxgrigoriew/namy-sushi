<script>
import { defineComponent, ref } from 'vue'
import menu from './../data/menu'

export default defineComponent({
  emits: 'click',

  setup(_, { emit }) {
    const menuRef = ref(null)
    const isOpenMenu = ref(false)

    const changeMenu = () => {
      console.log(123)
      isOpenMenu.value = !isOpenMenu.value
    }

    return {
      changeMenu,
      isOpenMenu,
      menuRef,
      menu,
    }
  },
})
</script>
<template>
  <header id="header" class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__wrapper">
          <button
            class="header__burger"
            :class="{ active: isOpenMenu }"
            area-label="Открыть меню"
            role="button"
            @click="changeMenu"
          >
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </button>
          <a href="#" class="header__logo">
            <picture>
              <source
                srcset="./../assets/images/mobile-logo.png"
                media="(max-width: 1024px)"
              />
              <img src="./../assets/images/logo.png" alt="Логотип" />
            </picture>
          </a>
        </div>
        <nav class="header__menu" :class="{ active: isOpenMenu }" ref="menuRef">
          <ul class="header__menu-list list-reset">
            <li class="header__menu-item" v-for="item in menu" :key="item.name">
              <NuxtLink
                :to="item.path"
                class="header__menu-link"
                @click.native="changeMenu"
                >{{ item.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <a href="tel:+79797009791" class="header__phone">
          <svg
            class="header__phone-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M15.984 12.6533C14.8172 11.7232 13.6332 11.1599 12.4808 12.0885L11.7927 12.6498C11.2892 13.0572 10.3531 14.9608 6.73382 11.0805C3.11531 7.20508 5.26863 6.60168 5.77286 6.19777L6.46475 5.63581C7.61113 4.70506 7.17851 3.53338 6.3517 2.32728L5.85275 1.59673C5.02217 0.393437 4.11773 -0.396817 2.96834 0.532522L2.3473 1.03828C1.8393 1.38319 0.419334 2.50429 0.0748931 4.63412C-0.339641 7.18962 0.968026 10.116 3.96398 13.3269C6.95617 16.5392 9.88579 18.1527 12.6609 18.1246C14.9672 18.1015 16.3601 16.948 16.7957 16.5287L17.419 16.0222C18.5654 15.0936 17.8531 14.1481 16.6857 13.2159L15.984 12.6533Z"
              fill="white"
            />
          </svg>
          <span class="header__phone-text">+7 979 700 97 91</span></a
        >

        <div class="header__buttons">
          <is-button @click="$emit('openModal')">
            <template v-slot:icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.491 18.168L18.6462 7.47652C18.5938 6.78767 18.0135 6.24828 17.3257 6.24828H15.6569V8.73152C15.6569 9.03904 15.409 9.28797 15.1028 9.28797C14.797 9.28797 14.5488 9.03904 14.5488 8.73152V6.24828H9.45147V8.73152C9.45147 9.03904 9.20324 9.28797 8.89741 9.28797C8.5912 9.28797 8.34334 9.03904 8.34334 8.73152V6.24828H6.67453C5.98677 6.24828 5.40647 6.78767 5.35404 7.47504L4.50892 18.1695C4.44355 19.026 4.73941 19.8785 5.32042 20.5084C5.90146 21.1383 6.72515 21.5 7.58025 21.5H16.42C17.2751 21.5 18.0988 21.1383 18.6799 20.5084C19.2609 19.8785 19.5567 19.026 19.491 18.168ZM11.2036 15.7332L11.2212 15.7488C11.2212 15.7413 11.2212 15.7488 11.2389 15.7645C11.2212 15.7488 11.2212 15.7488 11.2036 15.7332L11.2389 15.7645C11.2389 15.7645 11.2212 15.7488 11.2036 15.7332Z"
                  fill="#212121"
                />
                <path
                  d="M12.0024 2.5C9.986 2.5 8.34564 4.14779 8.34564 6.17288V6.24817H9.45378V6.17288C9.45378 4.76136 10.597 3.61287 12.0024 3.61287C13.4079 3.61287 14.5511 4.76136 14.5511 6.17288V6.24817H15.6592V6.17288C15.6592 4.14779 14.0188 2.5 12.0024 2.5Z"
                  fill="#212121"
                />
              </svg>
            </template>
          </is-button>
          <is-button>Войти</is-button>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.header {
  background-color: var(--blue);
  &__inner {
    position: relative;
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: space-between;
    padding-left: 230px;
  }
  &__wrapper {
    display: flex;
    gap: 20px;
  }
  &__burger {
    display: none;
    border: none;
    background-color: transparent;
    padding: 0;
    align-self: center;
    cursor: pointer;
    height: 24px;
    width: 30px;
    z-index: 2;
    flex-direction: column;
    justify-content: space-between;

    & .line {
      display: block;
      height: 3px;
      width: 100%;
      border-radius: 10px;
      background-color: var(--light);
      transition: all var(--transition);
    }

    &.active {
      .line1 {
        transform: rotate(45deg) translate(5px, -4px);
        transform-origin: left;
      }

      .line2 {
        opacity: 0;
      }

      .line3 {
        transform: rotate(-45deg) translate(3px, 6px);
        transform-origin: left;
      }
    }
  }
  &__logo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light);
    width: 162px;
    height: 162px;
    border-radius: 50%;
    box-shadow: 1px -1px 16px rgba(0, 0, 0, 0.06);
    top: -20px;
    left: 0;
  }
  &__menu {
    &-list {
      display: flex;
      gap: 35px;
    }

    &-item {
      position: relative;

      &:not(:last-child)::after {
        content: '';
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: var(--light);
        position: absolute;
        right: -18px;
        top: 50%;
      }
    }

    &-link {
      color: var(--light);
    }
  }

  &__phone {
    display: inline-flex;
    align-items: center;
    color: var(--light);

    gap: 3px;
    &__text {
      font-size: 18px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}

@media (max-width: 1024px) {
  .header {
    &__inner {
      padding-left: 0;
      padding: 12px 0;
    }
    &__burger {
      display: flex;
    }
    &__logo {
      position: static;
      display: block;
      width: auto;
      height: auto;
      border-radius: 0;
      background-color: transparent;
    }

    &__menu {
      position: fixed;
      left: -100%;
      width: 100%;
      top: 66px;
      transition: var(--transition);
      bottom: 0;
      background-color: var(--blue);
      overflow-x: auto;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      &-list {
        flex-direction: column;
        text-align: center;
        gap: 25px;
      }

      &-link {
        font-size: 26px;
      }
      &-item:not(:last-child)::after {
        display: none;
      }

      &.active {
        left: 0;
      }
    }
  }
}

@media (max-width: 520px) {
  .header {
    &__phone {
      &-text {
        display: none;
      }
    }

    &__buttons {
      display: none;
    }
  }
}
</style>
