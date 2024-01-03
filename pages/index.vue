<script>
export default {
  name: 'IndexPage',
}
</script>

<template>
  <div>
    <is-header />
    <div class="container">
      <is-menu-tab class="tab-menu" />
      <is-product-list />
    </div>
  </div>
</template>

<style lang="scss">
.tab-menu {
  padding-bottom: 60px;
}
</style>
