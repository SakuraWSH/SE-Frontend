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
          <el-button type="primary" round class="button" size="large" @click="_logIn()">登录</el-button>
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
          <el-button type="success" round class="button" size="large" @click="_signUp()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </body>
</template>


<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElImage, ElCard } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import { mapMutations } from 'vuex';
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
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
    ...mapMutations(["setEmail", "setUsername", "setToken", "setProfile", "setLogin"]),
    initWebSocket() {
      this.socket = io('127.0.0.1:5001/login');
      this.socket.on("connect", () => {
        console.log(this.socket.id);
      });
    },
    __logIn() {
      this.socket.emit('Login Info', {
        email: this.email,
        password: this.password
      });
      const __this = this;
      this.socket.on('post_info_response', function (data) {
        switch (data.login_code) {
          case 0:
            console.log("login success");
            setLogin(true);
            localStorage.setItem("Flag", "isLogin");
            localStorage.setItem("Email", this.loginForm.email);
            localStorage.setItem("Username", data.username);
            localStorage.setItem("Profile", data.profile);
            this.$router.replace('/home');
            break;
          case 1:
            alert('账号不存在！');
            this.loginForm.email = '';
            this.loginForm.password = '';
            break;
          case 2:
            alert('密码错误！');
            this.loginForm.password = '';
            break;
          default:
            console.log(data.login_code);
            break;
        }
      });
    },
    __signUp() {
      if (this.signupForm.password != this.signupForm.passwordComfirm) {
        alert('两次密码不同，请重试！');
        this.signupForm.password = '';
        this.signupForm.passwordComfirm = '';
        return;
      }
      this.socket.emit('Signup Info', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      const __this = this;
      this.socket.on('post_info_response', function (data) {
        switch (data.regist_code) {
          case 0:
            console.log("signup success");
            setLogin(true);
            localStorage.setItem("Flag", "isLogin");
            localStorage.setItem("Email", this.signupForm.email);
            localStorage.setItem("Username", this.signupForm.username);
            localStorage.setItem("Profile", "/src/assets/images/default_profile.png");
            this.$router.replace('/home');
            break;

          case -1:
            alert("请填写完整信息！");
            this.signupForm.password = "";
            break;

          case 1:
            alert("该邮箱已被注册！");
            this.signupForm.email = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            break;

          default:
            break;
        }
      });
    },
    _logIn() {
      axios({
        method: "post",
        url: "/api/login/",
        data: {
          email: this.loginForm.email,
          password: this.loginForm.password,
        },
      }).then(data => {
        switch (data.login_code) {
          case 0:
            console.log("login success");
            setLogin(true);
            localStorage.setItem("Flag", "isLogin");
            localStorage.setItem("Email", this.loginForm.email);
            localStorage.setItem("Username", data.username);
            // localStorage.setItem("Profile", data.profile);
            localStorage.setItem("Profile", "/src/assets/images/default_profile.png");
            this.$router.replace('/home');
            break;
          case 1:
            alert('账号不存在！');
            this.loginForm.email = '';
            this.loginForm.password = '';
            break;
          case 2:
            alert('密码错误！');
            this.loginForm.password = '';
            break;
          default:
            console.log(data.login_code);
            break;
        }
      });
    },
    _signUp() {
      axios({
        method: "post",
        url: "/api/regist/",
        data: {
          username: this.signupForm.username,
          email: this.signupForm.email,
          password: this.signupForm.password,
        },
      }).then(data => {
        switch (data.regist_code) {
          case 0:
            console.log("signup success");
            setLogin(true);
            localStorage.setItem("Flag", "isLogin");
            localStorage.setItem("Email", this.signupForm.email);
            localStorage.setItem("Username", this.signupForm.username);
            localStorage.setItem("Profile", "/src/assets/images/default_profile.png");
            this.$router.replace('/home');
            break;

          case -1:
            alert("请填写完整信息！");
            this.signupForm.password = "";
            break;

          case 1:
            alert("该邮箱已被注册！");
            this.signupForm.email = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            break;

          default:
            break;
        }
      });
    },
    logIn() {
      localStorage.setItem("Flag", "isLogin");
      localStorage.setItem("Email", this.loginForm.email);
      localStorage.setItem("Username", "Sam Wong");
      localStorage.setItem("Profile", "/src/assets/images/default_profile.png");
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
  background-image: url("../../src/assets/images/1c.jfif");
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