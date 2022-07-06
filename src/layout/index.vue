<template>
  <el-container>
    <el-aside width="auto">
      <Sidebar :collapse="layoutStore.getCollapse"/>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer height="30px">
        <Footer/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Sidebar from '../layout/sidebar/index.vue'
import Footer from '../layout/footer/index.vue'
import Header from '../layout/header/index.vue'

import {onMounted} from 'vue'
import {useLayoutStore} from '../store/modules/layout'
import {updateMenu, updateRouter} from '../utils/permission'

const layoutStore = useLayoutStore()

// 登陆成功后 进入layout页面时 就更新路由和菜单
onMounted(() => {
  updateRouter()// 更新路由
  layoutStore.setMenuList(updateMenu())// 更新菜单
})
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
}

.el-aside {
}

.el-header {
  padding: 0;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.el-main {
  height: 100%;
  width: 100%;
}

.el-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>