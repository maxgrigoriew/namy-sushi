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
      width: 32px;
      height: 32px;
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

@media (max-width: 1024px) {
  .checkbox-field {
    &__item {
      &:nth-child(1) {
        margin-right: 15px;
      }
      &:nth-child(2) {
        width: 26px;
        height: 26px;
        margin-right: 0;
        margin-right: 20px;
      }
      &:nth-child(3) {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 520px) {
  .checkbox-field {
    gap: 10px;
    &__item {
      &:nth-child(1) {
        margin-right: 0;
      }
      &:nth-child(2) {
        width: 20px;
        height: 20px;
        margin-right: 0;
      }
      &:nth-child(3) {
        font-size: 14px;
      }
      &:nth-child(4) {
        margin-left: 0;
        padding-left: 0;
        font-size: 10px;
      }
    }
  }
}
</style>
