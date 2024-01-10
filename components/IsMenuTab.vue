<script>
import { defineComponent } from 'vue'
import tabs from '~/data/tabs'
export default defineComponent({
  props: {
    selectedCategory: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      tabs,
    }
  },
})
</script>
<template>
  <div class="menu">
    <div class="menu__title">Меню</div>
    <ul class="menu__list list-reset">
      <li class="menu__list-item" v-for="tab in tabs" :key="tab.name">
        <is-button
          is-large
          class="menu__list-btn"
          :class="{ active: tab.category === selectedCategory }"
          @click="$emit('changeTab', tab.category)"
          >{{ tab.name }}
        </is-button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.menu {
  padding-top: 90px;
  padding-bottom: 60px;
  &__title {
    margin-bottom: 50px;
    font-size: 60px;
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

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: space-between;

    &-btn {
      text-transform: uppercase;
      padding: 16px 32px;
      font-size: 28px !important;
      color: var(--gold);
      background-color: transparent;
      &.active {
        background-color: var(--brown);
        color: var(--light);
      }
    }
  }
}

@media (max-width: 1280px) {
  .menu {
    &__title {
      font-size: 48px;
    }
    &__list {
      justify-content: flex-start;
      &-btn {
        padding: 14px 20px;
        font-size: 20px !important;
      }
    }
  }
}

@media (max-width: 520px) {
  .menu {
    padding-top: 20px;
    padding-bottom: 20px;
    &__title {
      font-size: 22px;
      margin-bottom: 32px;
      &::before {
        width: 5px;
        height: 5px;
        margin-right: 15px;
      }
      &::after {
        width: 5px;
        height: 5px;
        margin-left: 15px;
      }
    }

    &__list {
      &-btn {
        font-size: 16px !important;
        padding: 12px 18px !important;
      }
    }
  }
}
</style>
~/data/tabs
