<template>
  <el-dropdown @command="changeLanguage">
    <span class="el-dropdown-link">
   <svg-icon name="language"/>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh_CN" :disabled="currentLanguage==='zh_CN'">中 文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {computed} from 'vue'

const i18n = useI18n()

const currentLanguage = computed(() => i18n.locale.value)

// 切换语言
const changeLanguage = (language: string) => {
  localStorage.setItem('language', language)
  i18n.locale.value = language
}
</script>

<style scoped lang="scss">

</style>