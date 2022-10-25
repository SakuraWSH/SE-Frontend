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
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value1"
          :label="item.label"
          :value="item.value1"
          @click.native="selectThing1(item)">
        </el-option>
      </el-select>
      <div v-show=isShowConent1>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value2"
            :label="item.label"
            :value="item.value2"
            @click.native="selectThing2(item)">
          </el-option>
        </el-select>
        <div v-show=isShowConent11>
          <el-cascader :options="options11" :show-all-levels="false" />
        </div>
        <div v-show=isShowConent12>
        </div>
        <div v-show=isShowConent13>
        </div>
      </div>
      <div v-show=isShowConent2>
        选项二
      </div>
      <div v-show=isShowConent3>
        选项三
      </div>
    </div>
    <div class = "picture-add">
    </div>
    <el-input v-model="input" placeholder="商品详情" />
    <el-button>
      发布
    </el-button>
  value1:{{ value1 }}
  value2:{{ value2 }}
  </el-container>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
import { ref } from 'vue'
const input = ref('')
</script>

<script>
import { ElRow,ElCol,ElCard,ElDivider,ElButton,ElHeader,ElContainer,ElAside,ElInput,ElCascader,ElIcon,ElSelect,ElOption } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css';
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
    ElSelect,
    ElOption,
  },
  data() {
    return {
      options1: [{
        value1: '1',
        label: '淘物',
      }, 
      {
        value1: '2',
        label: '找人'
      }, 
      {
        value1: '3',
        label: '知事'
      } ],
      options2: [{
        value2: '1',
        label: '课程资料',
      }, 
      {
        value2: '2',
        label: '书籍专区',
      }, 
      {
        value2: '3',
        label: '日常用品',
      } ],
      options11:[
      {
        label:"买",
        children:[
        {
          label:"专业课",
        },
        {
          label:"选修课",
        },
        {
          label:"通选课",
        },
        {
          label:"体育课",
        },
        {
          label:"英语课",
        }
        ],
      },
      {
        label:"卖",
        children:[
        {
          label:"专业课",
        },
        {
          label:"选修课",
        },
        {
          label:"通选课",
        },
        {
          label:"体育课",
        },
        {
          label:"英语课",
        }
        ],
      }
      ],
      value1: '',
      value2: '',
    }
  },
  methods: {
    goto(router) {
      this.$router.replace(router);
    },
    selectThing1(item){
      if(item.value1 === '1'){            //options中的value
        this.isShowConent1 = true
        this.isShowConent2=false
        this.isShowConent3 = false
      }
      else if(item.value1 === '2') {
        this.isShowConent1 = false
        this.isShowConent2=true
        this.isShowConent3 = false
      }
      else if(item.value1 === '3') {
        this.isShowConent1 = false
        this.isShowConent2 = false
        this.isShowConent3 = true
      }
    },
    selectThing2(item){
      if(item.value2 === '1'){            //options中的value
        this.isShowConent11 = true
        this.isShowConent12 = false
        this.isShowConent13 = false
      }
      else if(item.value2 === '2') {
        this.isShowConent11 = false
        this.isShowConent12 = true
        this.isShowConent13 = false
      }
      else if(item.value2 === '3') {
        this.isShowConent11 = false
        this.isShowConent12 = false
        this.isShowConent13 = true
      }
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
  text-emphasis-style: 20px;
}
.poston{
  text-align: center;
}
.picture-add{
  text-align: center;
}
</style>