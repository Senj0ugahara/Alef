<template>
  <form class="form" @submit.prevent>
    <div class="form-parent">
      <h3 class="form-title">Персональные данные</h3>
      <ul class="form-list">
        <li class="form-item">
          <my-label for="parentName">
            Имя
          </my-label>
          <my-input
            name="name"
            id="parentName"
            placeholder="Ваше имя"
            v-model="parentName"
          />
        </li>
        <li class="form-item">
          <my-label for="parentAge">
            Возраст
          </my-label>
          <my-input
            name="age"
            type="number"
            id="parentAge"
            placeholder="Ваш возраст"
            v-model="parentAge"
          />
        </li>
      </ul>
      <button class="form-parent__btn" @click="showDialog">Добавить ребенка</button>
    </div>
    <div class="form-child" v-if="$store.state.childInfo.length > 0">
      <h3 class="form-title">Дети (макс.5)</h3>
      <ul class="form-child__list">
        <li class="form-child__item" v-for="(child, index) in getChilds" :key="index">
          <div class="form-item">
            <my-label for="childNameResult">
              Имя
            </my-label>
            <my-input
              name="name"
              type="text"
              id="childNameResult"
              :value="child.name"
              readonly
            />
          </div>
          <div class="form-item">
            <my-label for="childAgeResult">
              Возраст
            </my-label>
            <my-input
              name="age"
              type="number"
              id="childAgeResult"
              :value="child.age"
              readonly
            />
          </div>
          <button class="form-btn_delete" @click="onRemove(index)">Удалить</button>
        </li>
      </ul>
    </div>
    <my-button @click="onSubmit" />
  </form>
  <my-dialog v-model:show="$store.state.dialogVisible">
    <ChildForm />
  </my-dialog>
</template>

<script>
import ChildForm from './ChildForm.vue';

export default {
  components: {
    ChildForm
  },
  data() {
    return {
      parentName: '',
      parentAge: ''
    }
  },
  computed: {
    getChilds() {
      return this.$store.getters.getChilds;
    }
  },
  methods: {
    showDialog() {
      this.$store.state.dialogVisible = !this.$store.state.dialogVisible;
    },
    onRemove(index) {
      this.$store.dispatch('removeChild', index);
    },
    onSubmit() {
      const currentParent = {
        name: this.parentName,
        age: this.parentAge
      };
      this.$store.dispatch('submitParent', currentParent);
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

  &-btn {
    &_delete {
      background: transparent;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: #01A7FD;
      cursor: pointer;
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

  &-child {
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 20px;
    }
  }
}
</style>