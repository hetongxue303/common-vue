<template>
  <div class="header-parent">

    <div class="left">
      <!--折叠图标-->
      <div class="collapse" @click="loginStore.setCollapse(!loginStore.getCollapse)">
        <el-icon :size="28">
          <component v-if="loginStore.getCollapse" is="expand"/>
          <component v-else is="fold"/>
        </el-icon>
      </div>
      <Breadcrumb/>
    </div>
    <div class="right">
      <!--全屏-->
      <div class="FullScreen" @click="toggleFullScreen">
        <el-icon :size="20">
          <component is="FullScreen"/>
        </el-icon>
      </div>
      <!--个人中心-->
      <Center/>
      <div class="setting" @click="settingHandler">
        <el-icon :size="15">
          <component is="setting"/>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Center from '@layout/header/center.vue'
import Breadcrumb from '@components/Breadcrumb/index.vue'

import {useLoginStore} from '../../store/modules/login'

const loginStore = useLoginStore()

// 设置全屏
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      {
        document.exitFullscreen()
      }
    }
  }
}

// 设置按钮
const settingHandler = () => {
  console.log('待开发...')
}
</script>

<style scoped lang="scss">
.header-parent {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .collapse,
  .setting,
  .FullScreen {
    width: 50px;
    height: 49px;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(245, 245, 245, 0.8);
    }
  }
}
</style>