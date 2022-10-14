<template>

  <body>
    <div class="login-block login" v-if="login == 1">
      <img src="/src/assets/images/logo.png" alt="logo" class="login-logo" />
      <el-form :model="loginForm" class="login-form">
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.name" /> -->
          <el-input v-model="loginForm.email" size="large" placeholder="邮箱/Email" />
        </el-form-item>
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.desc" /> -->
          <el-input v-model="loginForm.password" size="large" placeholder="密码/Password" show-password />
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="primary" round class="button" size="large" @click="logIn()">登录</el-button>
          <el-button type="primary" round plain class="button" size="large" @click="login = 2">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-block signup" v-if="login == 2">
      <img src="/src/assets/images/logo.png" alt="logo" class="login-logo" />
      <el-form :model="signupForm" class="login-form">
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.name" /> -->
          <el-input v-model="signupForm.username" size="large" placeholder="用户名/Username" />
        </el-form-item>
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.name" /> -->
          <el-input v-model="signupForm.email" size="large" placeholder="邮箱/Email" />
        </el-form-item>
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.desc" /> -->
          <el-input v-model="signupForm.password" size="large" placeholder="密码/Password" show-password />
        </el-form-item>
        <el-form-item class="login-input">
          <!-- <el-input v-model="form.desc" /> -->
          <el-input v-model="signupForm.passwordComfirm" size="large" placeholder="确认密码/Comfirm Password"
            show-password />
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="primary" round plain class="button" size="large" @click="login = 1">返回</el-button>
          <el-button type="success" round class="button" size="large" @click="signUp()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </body>
</template>


<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElImage, ElCard } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
import user from '../stores/user';
export default defineComponent({
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElImage,
    ElCard,
  },
  data() {
    return {
      login: 1,
      user: {
        email: '',
        username: '',
        token: '',
        profile: '',
      },
    }
  },
  methods: {
    logIn() {
      console.log(this.loginForm.email);
      console.log(this.loginForm.password);
      user.email = this.loginForm.email;
      user.username = 'Test';
      user.token = '花拳绣腿';
      user.profile = '/src/assets/images/logo.png'
      this.$store.state.email = user.email;
      this.$store.state.username = user.username;
      this.$store.state.token = user.token;
      this.$store.state.profile = user.profile;
      this.$router.replace('/home');
    },
    signUp() {
      console.log(this.signupForm.username);
      console.log(this.signupForm.email);
      console.log(this.signupForm.password);
      console.log(this.signupForm.passwordComfirm);

      if (this.signupForm.password == this.signupForm.passwordComfirm) {
        this.login = 1;
      } else {
        alert('两次密码不同，请重试！');
        this.signupForm.password = '';
        this.signupForm.passwordComfirm = '';
      }
    }
  }
})
</script>


<script setup>
const loginForm = reactive({
  email: '',
  password: '',
})
const signupForm = reactive({
  username: '',
  email: '',
  password: '',
  passwordComfirm: '',
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
  /* width: 30%;
  height: 40%; */
  box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .08),
    0px 12px 32px rgba(0, 0, 0, .12),
    0px 8px 16px -8px rgba(0, 0, 0, .16);
}

.login {
  width: 30%;
  height: 40%;
}

.signup {
  width: 30%;
  height: 55%;
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
  /* height: 20%; */
  width: 50%;
  /* width: auto; */
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