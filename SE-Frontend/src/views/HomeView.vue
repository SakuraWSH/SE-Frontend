<template>
  <el-row justify="center">
    <el-col span="1" v-for="n in 12">
      <el-card>
        111
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ElCard, ElRow, ElCol } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElCard,
    ElRow,
    ElCol,
  },
})
</script>