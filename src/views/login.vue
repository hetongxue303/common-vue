<template>
  <el-row class="login-container">
    <!--左边-->
    <el-col :lg="16" :md="12" class="left">
      <div class="left-title">{{ $t(`login.leftTitle`) }}</div>
      <div class="left-text">{{ $t(`login.leftText`) }}</div>
    </el-col>
    <!--右边-->
    <el-col :lg="8" :md="12" class="right">
      <h2 class="right-title">{{ $t(`login.title`) }}</h2>
      <div class="right-textBox">
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>{{ $t(`login.text`) }}</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form :model="loginForm" :rules="rules" ref="ruleFormRef" class="right-loginBox">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" :placeholder="$t(`login.username`)">
            <template #prefix>
              <el-icon>
                <component is="user"/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" :placeholder="$t(`login.password`)" type="password" show-password>
            <template #prefix>
              <el-icon>
                <component is="lock"/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row class="w-[250px]">
            <el-col :span="14" class="mr-3">
              <el-input v-model="loginForm.code" :placeholder="$t(`login.code`)">
                <template #prefix>
                  <el-icon>
                    <component is="key"/>
                  </el-icon>
                </template>
              </el-input>
            </el-col>
            <el-col :span="8" class="flex justify-center items-center">
              <el-image :src="imgUrl" @click="initImageCode" style="cursor: pointer" :title="$t(`login.imgTitle`)"/>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.rememberMe">{{ $t(`login.rememberMe`) }}</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginHandler(ruleFormRef)" color="#626aef" class="w-[250px]">
            {{ $t(`login.btnText`) }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref, watch} from 'vue'
import {getVerify, login} from '../api/user/user'
import {ElMessage, FormInstance, FormRules} from 'element-plus'
import {useRouter} from 'vue-router'
import {loginEntity, loginVo} from '../api/user/types'
import {useCookies} from '@vueuse/integrations/useCookies'
import {Base64} from 'js-base64'
import {useLoginStore} from '../store/modules/login'
import {updateMenu} from "../utils/permission";
import {menuItem} from "../layout/types";

// 表单数据
const loginForm = reactive<loginEntity>({
  username: '',
  password: '',
  code: '',
  rememberMe: false
})

// 表单校验
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  username: [
    {required: true, message: '账号不能为空', trigger: 'blur'},
    {min: 3, max: 20, message: '账号长度为3到20', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空', trigger: 'blur'},
    {min: 3, max: 20, message: '密码长度为3到20', trigger: 'blur'}
  ],
  code: [
    {required: true, message: '验证码不能为空', trigger: 'blur'}
  ]
})

// 验证码相关
const imgUrl = ref<string>('')
const initImageCode = async () => {
  const {data} = await getVerify()
  imgUrl.value = data.data
}

// 监听验证码变化
watch(() => imgUrl.value, () => loginForm.code = '')

// 登陆处理
const cookie = useCookies()
const loginStore = useLoginStore()
const router = useRouter()

const loginHandler = async (formEl: FormInstance | undefined) => {
  // 表单校验
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      // 登录请求
      const {data, headers} = await login(loginForm);
      switch (data.code as number) {
        case 200: {
          // 记住我功能
          if (loginForm.rememberMe) {
            cookie.set('USERINFO', Base64.encode(JSON.stringify(loginForm)))
          } else if (cookie.get('USERINFO')) {
            cookie.remove('USERINFO')
          }
          // 存储Authorization
          loginStore.setAuthorization(headers.authorization)
          // 存储菜单
          // 存储路由
          ElMessage.success('登陆成功')
          await router.push('/dashboard');
          break
        }
        case 5000:
          ElMessage.error('验证码错误')
          loginForm.code = ''
          await initImageCode()
          break
        case 5001:
          ElMessage.error('验证码已过期')
          loginForm.code = ''
          await initImageCode()
          break
        case 5002:
          ElMessage.error('验证码不能为空')
          loginForm.code = ''
          await initImageCode()
          break
        case 400:
          ElMessage.error('用户名或密码错误')
          loginForm.code = ''
          loginForm.password = ''
          await initImageCode()
          break
        default:
          ElMessage.warning('发生异常')
      }
    }
  })
}

// 检查是否存在cookie 存在就填充信息
const autoFillInfo = () => {
  const data = cookie.get('USERINFO') ? JSON.parse(Base64.decode(cookie.get('USERINFO'))) : null
  if (data) {
    loginForm.rememberMe = data.rememberMe
    loginForm.username = data.username
    loginForm.password = data.password
  }
}

onMounted(() => {
  initImageCode()// 初始化验证码
  autoFillInfo()// 判断cookie
})
</script>

<style scoped lang="scss">
.login-container {
  @apply min-h-screen bg-indigo-500;

  .left {
    @apply flex flex-col justify-center items-center;

    &-title {
      @apply font-bold text-5xl text-light-50 mb-4;
    }

    &-text {
      @apply text-gray-200 text-sm;
    }
  }

  .right {
    @apply bg-light-50 flex flex-col justify-center items-center;

    &-title {
      @apply font-bold text-3xl text-gray-800;
    }

    &-textBox {
      @apply space-x-2 flex justify-center items-center my-5 text-gray-300;
    }

    &-loginBox {
      @apply w- [ 250 px ];
    }
  }
}
</style>