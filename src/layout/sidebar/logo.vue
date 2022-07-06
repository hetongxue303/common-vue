<template>
  <div
      style="height: 50px;width:auto;background-color: darkseagreen;display: flex;justify-content: center;align-items: center">
    <transition name="fade">
      <p v-if="!layoutStore.getCollapse">通用后台管理系统</p>
      <p v-else>图片...</p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import {useLayoutStore} from '../../store/modules/layout'

const layoutStore = useLayoutStore()

</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>