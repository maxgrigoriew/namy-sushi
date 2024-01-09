<template>
  <label>
    <input
      id="input"
      class="custom-radio"
      name="color"
      type="radio"
      value="green"
      checked
    />
    <span></span>
  </label>
</template>

<style lang="scss" scoped>
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
  width: 1px;
  height: 1px;
}
label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
span::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #a5a5a5;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  cursor: pointer;
}

.custom-radio:not(:disabled):active + span::before {
  background-color: #0acf83;
  border-color: #0acf83;
}
.custom-radio:focus:not(:checked) + span::before {
  border-color: #0acf83;
}
.custom-radio:checked + span::before {
  border-color: #0acf83;
  background-color: #0acf83;
  background-image: url('../assets/images/checkbox.svg');
}
.custom-radio:disabled + span::before {
  background-color: var(--light);
}

@media (max-width: 520px) {
  span::before {
    width: 26px;
    height: 26px;
  }
}
</style>
