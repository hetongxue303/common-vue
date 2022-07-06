<template>
  <el-dropdown trigger="hover">
    <span class="el-dropdown-link">
      <div class="content">
        <el-avatar shape="circle"
                   :size="30"
                   src="https://p26-passport.byteacctimg.com/img/user-avatar/7eb085af8382dfa92ed6fb9a4aea448c~300x300.image"/>
   <span class="username">用户名</span>
    </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>布局设置</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.content {
  width: 100px;
  height: 49px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(245, 245, 245, 0.8);
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: 12px;
  }
}

</style>