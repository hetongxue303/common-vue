<template>
  <el-menu
      :collapse="props.collapse"
      :default-active="active"
      :router="true"
      :unique-opened="true"
      active-text-color="#409EFF"
      background-color="#304156"
      text-color="#fff"
      class="menu">
    <!--logo-->
    <Logo/>
    <!--菜单项-->
    <MenuItem :data="layoutStore.getMenuList"/>
  </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from '@layout/sidebar/menuItem.vue'
import Logo from '@layout/sidebar/logo.vue'
import {onMounted, PropType, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useLayoutStore} from '../../store/modules/layout'

const layoutStore = useLayoutStore()

const props = defineProps({
  collapse: {
    type: Boolean as PropType<boolean>,
    required: true
  }
})

// 菜单默认选中
const route = useRoute()
const active = ref<string>('/dashboard')
const changeDefaultActive = () => active.value = route.path

// 监听路由变化设置菜单
watch(() => route.path, () => changeDefaultActive(), {deep: true, immediate: true})

// 启动
onMounted(() => changeDefaultActive())
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;

  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>