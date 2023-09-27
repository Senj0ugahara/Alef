<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  display: block;
  padding: 2px 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #111111;

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #111111;
  }
}
</style>