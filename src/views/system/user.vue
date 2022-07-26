<template>
  <el-container>
    <el-table :data="users" style="width: 100%">
      <el-table-column type="selection" width="55"/>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="nickName" label="昵称"></el-table-column>
      <el-table-column label="性别">
        <template #default="scope">
          <span v-if="scope.row.gender==='0'">保密</span>
          <span v-else-if="scope.row.gender==='1'">男</span>
          <span v-else>女</span>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="updateTime" label="修改时间"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" type="primary">修改</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
  {{ aa }}
</template>

<script setup lang="ts">
import {getUserList} from "../../api/user/user";
import {onMounted, reactive} from "vue";
import request from "../../utils/request";
import * as qs from "qs";

let aa: any = reactive({})

let users = reactive([{
  username: 'admin',
  nickName: '何同学',
  gender: '1',
  createTime: '2022-4-3 22:55:45',
  updateTime: '2022-5-3 22:55:45'
}])

const getUserInfo = async () => {
  const {data} = await getUserList({name: '何同学'})
  console.log(data)
  switch (data.code) {
    case 200 || 201:
      users = data.data
      break
  }
}
onMounted(() => {
  getUserInfo()
})
</script>

<style scoped lang="scss">

</style>