<template>
  <main>
    登录页面
  </main>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">About</router-link>
</template>

<script>
import { ElButton, ElRow } from 'element-plus';
import { defineComponent } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElButton, ElRow,
  },
})
</script>