<template>
  <div class="sidebar-logo-container" :class="{'collapse':layoutStore.getCollapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="layoutStore.getCollapse" key="collapse" class="sidebar-logo-link" to="/">
        <el-image :src="logoImg" class="sidebar-logo"/>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <el-image :src="logoImg" class="sidebar-logo"/>
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {useLayoutStore} from '../../store/modules/layout'
import {ref} from 'vue'

const layoutStore = useLayoutStore()
const title = ref<string>('通用管理系统')
const logoImg = ref<string>('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
</script>

<style scoped lang="scss">
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 6px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>