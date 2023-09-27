<template>
  <div class="presonal-info" v-if="$store.state.parentInfo">
    <div class="presonal-info-parent">
      <h3 class="presonal-info-title">Персональные данные</h3>
      <p class="presonal-info-parent__value">
        <b>
          {{ getParent.name }}, {{ getParent.age }}
        </b>
      </p>
    </div>
    <div class="presonal-info-child">
      <h3 class="presonal-info-title">Дети</h3>
      <ul class="presonal-info-child__list">
        <li class="presonal-info-child__item" v-for="(child, index) in getChilds" :key="index">
          <p>
            <b>
              {{ child.name }}, {{ child.age }} лет
            </b>
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="personal-info__empty" v-else>
    <p>
      Заполните информацию о себе
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    getParent() {
      return this.$store.getters.getParent;
    },
    getChilds() {
      return this.$store.getters.getChilds;
    }
  }
}
</script>

<style lang="scss" scoped>
.presonal-info{
  &-title {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #111111;
  }

  &-parent {
    &__value {
      margin-bottom: 60px;
      font-size: 16px;
      line-height: 24px;
      color: #111111;
    }
  }

  &-child {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__item {
      display: inline-block;
      padding: 10px 20px;
      background: #F1F1F1;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        color: #000000;
      }
    }
  }
}
</style>