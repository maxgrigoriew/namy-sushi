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

@media (max-width: 1024px) {
  .checkbox-field {
    &__item {
      &:nth-child(1) {
        margin-right: 15px;
      }
      &:nth-child(2) {
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
    flex-direction: column;
    align-items: start;
    gap: 10px;
    &__item {
      &:nth-child(4) {
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
}
</style>
