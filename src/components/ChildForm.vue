<template>
  <form class="form-child" @submit.prevent="onSubmitChild">
    <h3 class="form-title">Данные о ребенке</h3>
    <ul class="form-list">
      <li class="form-item">
        <my-label for="childName">
          Имя
        </my-label>
        <my-input
          name="name"
          id="childName"
          placeholder="Имя ребенка"
          required
          v-model="childName"
        />
      </li>
      <li class="form-item">
        <my-label for="childAge">
          Возраст
        </my-label>
        <my-input
          name="age"
          type="number"
          id="childAge"
          placeholder="Возраст ребенка"
          required
          v-model="childAge"
        />
      </li>
    </ul>
    <my-button type="submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      childName: '',
      childAge: ''
    }
  },
  methods: {
    onSubmitChild() {
      const currentChild = {
        name: this.childName,
        age: this.childAge
      };
      this.$store.dispatch('submitChild', currentChild);
      this.childName = '';
      this.childAge = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 620px;
  width: 100%;
  margin: 0 auto;

  &-title {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #111111;
  }

  &-item {
    width: 100%;
    display: block;
    padding: 8px 16px;
    border: 1px solid #F1F1F1;
    border-radius: 4px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &-parent {
    &__btn {
      position: relative;
      display: flex;
      margin-top: 30px;
      margin-left: auto;
      padding: 10px 20px 10px 48px;
      border: 2px solid #01A7FD;
      border-radius: 100px;
      background: transparent;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: #01A7FD;
      cursor: pointer;

      &::before {
        content: '+';
        position: absolute;
        top: 50%;
        left: 20px;
        width: 24px;
        font-size: 24px;
        line-height: 24px;
        color: #01A7FD;
        transform: translateY(-50%);
      }
    }
  }
}
</style>