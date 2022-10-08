<template>

  <body>
    <div class="login-block">
      <img src="/src/assets/images/logo.png" alt="logo" class="login-logo" />
      <el-form :model="loginForm" class="login-form">
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.name" /> -->
          <el-input size="large" placeholder="邮箱/Email" />
        </el-form-item>
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.desc" /> -->
          <el-input size="large" placeholder="密码/Password" />
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="primary" round class="button" size="large">登录</el-button>
          <el-button type="primary" round plain class="button" size="large">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </body>
</template>


<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElImage, ElCard } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElImage,
    ElCard,
  },
})
</script>


<script setup>
const loginForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>


<style scoped>
body {
  display: flex;
  align-items: center;
  background-color: aqua;
}

.login-block {
  margin: 0 auto;
  background-color: white;
  /* justify-content: center; */
  /* align-content: center; */
  text-align: center;
  border-radius: 25px;
  padding: 30px;
  /* border: 1px solid; */
  width: 30%;
  height: 40%;
  box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .08),
    0px 12px 32px rgba(0, 0, 0, .12),
    0px 8px 16px -8px rgba(0, 0, 0, .16);
}

.login-form {
  margin: 0 auto;
  /* border: 1px solid; */
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-logo {
  height: 20%;
  width: auto;
  margin-top: 3%;
  /* border: 1px solid; */
}

.login-input {
  width: 80%;
  padding: 5px;
  /* border: 1px solid; */
  margin: 0;
  margin-top: 5%;
}

.form-item {
  margin: 0;
  margin-top: 5%;
  /* border: 1px solid; */
  justify-content: center;
  align-content: center;
}

.button {
  justify-content: center;
  align-content: center;
}
</style>