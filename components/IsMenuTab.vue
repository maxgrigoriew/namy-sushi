<script></script>
<template>
  <div class="menu">
    <div class="menu__title">Меню</div>
    <ul class="menu__list list-reset">
      <li class="menu__list-item">
        <is-button is-large class="menu__list-btn">Роллы</is-button>
      </li>
      <li class="menu__list-item">
        <is-button is-large class="menu__list-btn">суши и гунканы</is-button>
      </li>
      <li class="menu__list-item">
        <is-button is-large class="menu__list-btn">сеты</is-button>
      </li>
      <li class="menu__list-item">
        <is-button is-large class="menu__list-btn">лапша и рис</is-button>
      </li>
      <li class="menu__list-item">
        <is-button is-large class="menu__list-btn">салаты</is-button>
      </li>
      <li class="menu__list-item">
        <is-button is-large class="menu__list-btn">ГОрячие блюда</is-button>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.menu {
  padding-top: 90px;
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
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    &-btn {
      text-transform: uppercase;
      padding: 16px 32px;
      font-size: 20px;
    }
  }
}
</style>
