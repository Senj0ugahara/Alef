<template>
  <label class="lable">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'my-label'
}
</script>

<style lang="scss" scoped>
.lable {
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: #1111117A;
}
</style>