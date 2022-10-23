<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <div class = "post">
      发布页面
    </div>
    <el-input v-model="input" placeholder="标题" />
    <div class = "poston">
      <el-cascader :options="options" :show-all-levels="true" />
    </div>
    <div class = "picture-add">
      <el-button>
        <el-icon><Plus /></el-icon>
      </el-button>
    </div>
    <el-input v-model="input" placeholder="商品详情" />
    <el-button>
      发布
    </el-button>
  </el-container>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
import { ref } from 'vue'
const input = ref('')
const options = [
  {
    label:'淘物',
    children:[
      {
        label:'课程资料',
      },
      {
        label:'书籍专区',
      },
      {
        label:'日常用品',
      }
    ]
  },
  {
    label:'找人',
    children:[
      {
        label:'课程组队',
      },
      {
        label:'活动约人',
      },
      {
        label:'寻找伴侣',
      },
    ]
  },
  {
    label:'知事',
    children:[
      {
        label:'课程攻略',
      },
      {
        label:'生涯指北',
      },
      {
        label:'燕园生活',
      },
      {
        label:'吐槽专区',
      }
    ]
  },
]
</script>

<script>
import { ElRow,ElCol,ElCard,ElDivider,ElButton,ElHeader,ElContainer,ElAside,ElInput,ElCascader,ElIcon } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css'

export default defineComponent({
  components: {
    ElCol,
    ElRow,
    ElCard,
    ElDivider,
    ElButton,
    ElContainer,
    ElHeader,
    ElAside,
    ElInput,
    ElCascader,
    ElIcon,
  },
  data () {
    return {}
  },
  methods: {
    goto(router) {
      this.$router.replace(router);
    }
  }
})
</script>

<style>
.el-container{
  height: 100%;
  width: 100%;
}
.el-header{
  padding: 0;
}
.post{
  text-align: center;
}
.poston{
  text-align: center;
}
.picture-add{
  text-align: center;
}
</style>