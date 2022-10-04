<template>
  <el-main>
    <el-form :model="form" class="login-form">
      <el-image src="/src/assets/images/logo.png" :class="image"></el-image>
      <el-form-item label="邮箱">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.desc" />
      </el-form-item>
      <el-form-item class="form-item">
        <el-button type="primary" round class="button">登录</el-button>
        <el-button type="primary" round plain class="button">注册</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>


<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElImage, ElMain } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElImage,
    ElMain,
  },
})
</script>


<script setup>
const form = reactive({
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
.login-form {
  justify-content: center;
  align-content: center;
  border-radius: 25px;
  padding: 50px;
  border: 1px solid;
}

.image {
  justify-content: center;
}

.form-item {
  border: 1px solid;
  justify-content: center;
  align-content: center;
}

.button {
  justify-content: center;
  align-content: center;
}
</style>