<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <router-link class="navbar-logo" to="/">
            <img src="../assets/images/logo.svg" alt="Alef">
          </router-link>
          <ul class="navbar-list">
            <li
              class="navbar-item"
              v-for="link in links"
              :key="link.alias"
            >
              <router-link class="navbar-link" :to="link.url">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { links } from '@/_config'

export default {
  data() {
    return {
      links: links
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 1px 0px 0px #1111111A;
}

.navbar {
  padding: 24px 0;

  &-content {
    display: flex;
    align-items: center;
  }

  &-logo {
    margin-right: auto;
  }

  &-list {
    margin-right: auto;
    display: flex;
  }

  &-item {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }

  &-link {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #1111117a;
  }
}

.router-link-active {
  font-weight: 700;
}
</style>