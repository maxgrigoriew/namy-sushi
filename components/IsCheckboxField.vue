<template>
  <div class="checkbox-field">
    <div class="checkbox-field__item">
      <slot name="checkbox"></slot>
    </div>
    <div class="checkbox-field__item">
      <slot name="icon"> Способ доставки </slot>
    </div>
    <div class="checkbox-field__item">
      <slot name="variant"> Способ доставки </slot>
    </div>
    <div class="checkbox-field__item">
      <slot name="description"> Способ доставки </slot>
    </div>
  </div>
</template>

<style lang="scss">
.checkbox-field {
  display: flex;
  align-items: center;

  &__item {
    &:nth-child(1) {
      margin-right: 20px;
    }
    &:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
    }
    &:nth-child(3) {
      font-size: 18px;
    }

    &:nth-child(4) {
      width: 160px;
      margin-left: auto;
      padding-left: 10px;
      color: var(--accent);
      font-size: 12px;
      font-weight: 300;
    }
  }
}
</style>
