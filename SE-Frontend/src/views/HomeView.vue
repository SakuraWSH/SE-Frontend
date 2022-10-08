<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-main>
      <el-row justify="center">
        <el-col span="1" v-for="n in 12">
          <el-card>
            111
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</template>

<script setup>
import NavBar from "../components/NavBar.vue"
</script>

<script>
import { ElCard, ElRow, ElCol, ElContainer, ElHeader, ElMain } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElCard,
    ElRow,
    ElCol,
    ElContainer,
    ElHeader,
    ElMain,
  },
})
</script>

<style scoped>
.el-header {
  padding: 0;
}
</style>