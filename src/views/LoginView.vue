<template>

  <body>
    <div class="login-block login" v-if="login == 1">
      <img src="/src/assets/images/logo.png" alt="logo" class="login-logo" />
      <el-form :model="loginForm" class="login-form">
        <!-- <el-form class="login-form"> -->
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
          <el-input v-model="signupForm.username" size="large" placeholder="用户名/Username" />
        </el-form-item>
        <el-form-item class="login-input">
          <el-input v-model="signupForm.email" size="large" placeholder="邮箱/Email" />
        </el-form-item>
        <el-form-item class="login-input-captcha">
          <el-input v-model="signupForm.captcha" size="large" class="captcha" placeholder="邮箱验证码/Email Captcha" />
          <el-button type="info" plain class="button" size="middle" @click="getCaptcha()">获取</el-button>
        </el-form-item>
        <el-form-item class="login-input">
          <el-input v-model="signupForm.password" size="large" placeholder="密码/Password" show-password />
        </el-form-item>
        <el-form-item class="login-input">
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
import { mapMutations } from 'vuex';
import axios from 'axios';
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
  data() {
    return {
      login: 1,
      loginForm: reactive({
        email: '',
        password: '',
      }),
      signupForm: reactive({
        username: '',
        email: '',
        captcha: '',
        password: '',
        passwordComfirm: '',
      }),
    }
  },
  methods: {
    ...mapMutations(["setEmail", "setUsername", "setToken", "setProfile", "setLogin"]),
    logIn() {
      // console.log(this);
      // console.log(this.loginForm);
      axios({
        method: "post",
        url: "/api/login/",
        data: {
          email: this.loginForm.email,
          password: this.loginForm.password,
        },
      }).then(data => {
        console.log(data);
        switch (data.data.login_code) {
          case 0:
            console.log("login success");
            localStorage.setItem("Flag", "isLogin");
            localStorage.setItem("Email", this.loginForm.email);
            localStorage.setItem("Username", data.data.username);
            // localStorage.setItem("Profile", data.profile);
            localStorage.setItem("UID", data.data.userid);
            localStorage.setItem("Profile", "/src/assets/images/default_profile.png");
            this.$router.replace('/home');
            break;
          case -1:
            this.$message.error('请输入完整的邮箱与密码信息！');
            this.loginForm.email = '';
            this.loginForm.password = '';
            break;
          case 1:
            this.$message.error('账号不存在！');
            this.loginForm.email = '';
            this.loginForm.password = '';
            break;
          case 2:
            this.$message.error('密码错误！');
            this.loginForm.password = '';
            break;
          default:
            this.$message.error(data.data.login_message);
            console.log(data.data.login_code);
            break;
        }
      });
    },
    getCaptcha() {
      axios({
        method: "post",
        url: "/api/sendemail/",
        data: {
          email: this.signupForm.email,
        },
      }).then(data => {
        switch (data.data.regist_code) {
          case 0:
            break;

          case 1:
            this.$message.error("该邮箱已被注册！");
            this.signupForm.email = "";
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            this.signupForm.passwordComfirm = "";
            break;

          case 2:
            this.$message.error("该邮箱无注册权限，请使用PKU邮箱！");
            this.signupForm.email = "";
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            this.signupForm.passwordComfirm = "";
            break;

          default:
            break;
        }
      });
    },
    signUp() {
      if (this.signupForm.password != this.signupForm.passwordComfirm) {
        this.$message.error("Please put in the same password twice!");
        this.signupForm.password = "";
        this.signupForm.passwordComfirm = "";
        return;
      }

      axios({
        method: "post",
        url: "/api/regist/",
        data: {
          username: this.signupForm.username,
          email: this.signupForm.email,
          password: this.signupForm.password,
          captcha_skip: false,
          captcha: this.signupForm.captcha,
        },
      }).then(data => {
        switch (data.data.regist_code) {
          case 0:
            console.log("signup success");
            localStorage.setItem("Flag", "isLogin");
            localStorage.setItem("Email", this.signupForm.email);
            localStorage.setItem("Username", this.signupForm.username);
            localStorage.setItem("UID", data.data.userid);
            localStorage.setItem("Profile", "/src/assets/images/default_profile.png");
            this.$router.replace('/home');
            break;

          case -1:
            this.$message.error("请填写完整信息！");
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.passwordComfirm = "";
            break;

          case 1:
            this.$message.error("该邮箱已被注册！");
            this.signupForm.email = "";
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            this.signupForm.passwordComfirm = "";
            break;

          case 2:
            this.$message.error("该邮箱无注册权限，请使用PKU邮箱！");
            this.signupForm.email = "";
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            this.signupForm.passwordComfirm = "";
            break;

          case 3:
            this.$message.error("验证码错误！");
            this.signupForm.email = "";
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            this.signupForm.passwordComfirm = "";
            break;

          case 4:
            this.$message.error("用户名已被注册！")
            this.signupForm.email = "";
            this.signupForm.captcha = "";
            this.signupForm.password = "";
            this.signupForm.username = "";
            this.signupForm.passwordComfirm = "";
            break;

          default:
            break;
        }
      });
    },
  }
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
  text-align: center;
  border-radius: 25px;
  padding: 30px;
  height: 40%;
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
  height: 65%;
}

.login-form {
  margin: 0 auto;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-logo {
  width: 50%;
  margin-top: 3%;
}

.login-input {
  width: 80%;
  padding: 5px;
  margin: 0;
  margin-top: 5%;
}

.login-input-captcha {
  width: 80%;
  padding: 5px;
  margin: 0;
  margin-top: 5%;
}

.captcha {
  width: 70%;
  margin-right: 10px;
}

.form-item {
  margin: 0;
  margin-top: 5%;
  justify-content: center;
  align-content: center;
}

.button {
  justify-content: center;
  align-content: center;
}
</style>