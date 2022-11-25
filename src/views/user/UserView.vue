
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <el-aside width="1080px">
          <el-tabs v-model="activeTab" :tab-position="tabPosition" style="height: 800px" class="demo-tabs">
          <el-tab-pane label="我的信息" name="info">                                                                                                                                                                           
            <div class>
            <el-avatar :size="50" :src="circleUrl" /> 
          </div>
          <div style="margin: 20px 0" />
          <div>
            我的名字
          </div>
          <div style="margin: 20px 0" />
          <div>
            <el-input
              v-model="textarea"
              :rows="10"
              type="textarea"
              placeholder="这个人很懒，什么也没留下"
            />

          </div>
          <div>
            <el-button type="primary">保存</el-button>
            <el-button type="primary">提交</el-button>
          </div>
          <div>
            <el-button type="success" style="margin-left: 16px" @click="drawer = true">
              详细信息
            </el-button>
            <el-drawer v-model="drawer" title="I am the title" :with-header="false">
              <span>邮箱等详细信息!</span>
            </el-drawer>
          </div>
          </el-tab-pane>

          <el-tab-pane label="我的发布" name="posts">
            <el-input size="large"  placeholder="搜索
            " >
              <template #prefix>
                <el-icon class="el-input__icon">
                    <search />
                </el-icon>
              </template>
            </el-input>

            <el-table :data="tableData" style="width: 100%" height="500">
              <el-table-column fixed prop="date" label="日期" width="150" />
              <el-table-column prop="time" label="时间" width="120" />
              <el-table-column prop="title" label="标题" width="200" />
              <el-table-column prop="city" label="分组" width="200" />
              <el-table-column prop="state" label="状态" width="200" />
              <el-table-column prop="zip" label="编号" width="120" />
            </el-table>
          </el-tab-pane>

          <el-tab-pane label="我的聊天" name="messages">
            <el-input size="large"  placeholder="搜索
            " >
              <template #prefix>
                <el-icon class="el-input__icon">
                    <search />
                </el-icon>
              </template>
            </el-input>

            <el-table :data="friendData" @current-change="handleCurrentChange" style="width: 100%" height="400">
              <el-table-column fixed prop="name" label="姓名" width="150" />
              <el-table-column prop="time" label="时间" width="320" />
              <el-table-column prop="signal" label="标记" width="200" />
              <el-table-column prop="context" label="消息内容" width="600" />
            </el-table>

          </el-tab-pane>

        </el-tabs>
        </el-aside>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
</script>

<script>
import { ref, reactive,toRefs, defineComponent } from 'vue'
import { ElCol, ElRow, ElCard, ElDivider, ElCascader, ElPagination, ElIcon, ElContainer, ElHeader, ElInput, ElButton, ElMain, ElAside, ElTable, ElTabs, ElTabPane, ElTableColumn, ElDrawer } from 'element-plus';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
//消息-聊天右侧聊天界面样式

export default defineComponent({

  components:{
    ElCol,
    ElRow,
    ElCard,
    ElDivider,
    ElCascader,
    ElPagination,
    ElIcon,
    ElContainer,
    ElHeader,
    ElInput,
    ElButton,
    ElMain,
    ElAside,
    ElTable,
    ElTabs,
    ElTabPane,
    ElTableColumn,
    ElDrawer
  },
  data(){
    return{
      tabPosition: ref('left'),
      textarea: ref(''),
      drawer: ref(false),
      currentDate: ref(new Date()),
      state: reactive({
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      }),
      circleUrl: toRefs(state),
      activeTab: 'info',
      tableData : [
  {
    date: '2022-11-01',
    time:'20:30',
    title: '一起学习软件工程',
    state: '审核中',
    city: '课程攻略',
    zip: 'KC 101',
  },
  {
    date: '2022-10-30',
    time:'19:30',
    title: '水一水热度',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 203',
  },
  {
    date: '2022-10-30',
    time:'16:00',
    title: '一起来看S赛',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 189',
  },
  {
    date: '2022-10-25',
    time:'10:07',
    title: '出二手无线鼠标~',
    state: '已发布',
    city: '日用物品',
    zip: 'RY 463',
  },
  {
    date: '2022-10-24',
    time:'14:30',
    title: '午睡起来还是好困',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 52',
  },
  {
    date: '2022-10-23',
    time:'10:30',
    title: '出专业课程书了',
    state: '已发布',
    city: '书籍专区',
    zip: 'SJ 34',
  },
  {
    date: '2022-10-20',
    time:'22:30',
    title: '我来做第一条',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 1',
  },
      ],
      friendData : [
  {
    name: 'clem1',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem2',
    time:'2022-11-01 20:30',
    signal: '已读',
    context:'这仅仅是一段展示'
  },
  {
    name: '我是谁',
    time:'2022-11-01 19:30',
    signal: '未读',
    context:'没有实际意义'
  },
  {
    name: '你好',
    time:'2022-10-23 20:30',
    signal: '未读',
    context:'所以我也不知道要编些什么'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'但是他是可以非常长的6666666666666666666666666666666666666666666'
  },
  {
    name: '姓名也可以很长2333333',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
      ],
    }
  },
  mounted() {
    this.selectTab();
  },
  watch:{
    $route(to,from){
      this.selectTab();
    }
  },
  methods:{
    selectTab() {
      if(this.$route.query.tab != null){
        this.activeTab = this.$route.query.tab;
      }
    }
  }

})
/*
const tabPosition = ref('left')
const textarea = ref('')
const drawer = ref(false)
const currentDate = ref(new Date())

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  
})


const { circleUrl, squareUrl, sizeList } = toRefs(state)
const tableData = [
  {
    date: '2022-11-01',
    time:'20:30',
    title: '一起学习软件工程',
    state: '审核中',
    city: '课程攻略',
    zip: 'KC 101',
  },
  {
    date: '2022-10-30',
    time:'19:30',
    title: '水一水热度',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 203',
  },
  {
    date: '2022-10-30',
    time:'16:00',
    title: '一起来看S赛',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 189',
  },
  {
    date: '2022-10-25',
    time:'10:07',
    title: '出二手无线鼠标~',
    state: '已发布',
    city: '日用物品',
    zip: 'RY 463',
  },
  {
    date: '2022-10-24',
    time:'14:30',
    title: '午睡起来还是好困',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 52',
  },
  {
    date: '2022-10-23',
    time:'10:30',
    title: '出专业课程书了',
    state: '已发布',
    city: '书籍专区',
    zip: 'SJ 34',
  },
  {
    date: '2022-10-20',
    time:'22:30',
    title: '我来做第一条',
    state: '已发布',
    city: '吐槽专区',
    zip: 'TC 1',
  },
]
const friendData = [
  {
    name: 'clem1',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem2',
    time:'2022-11-01 20:30',
    signal: '已读',
    context:'这仅仅是一段展示'
  },
  {
    name: '我是谁',
    time:'2022-11-01 19:30',
    signal: '未读',
    context:'没有实际意义'
  },
  {
    name: '你好',
    time:'2022-10-23 20:30',
    signal: '未读',
    context:'所以我也不知道要编些什么'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'但是他是可以非常长的6666666666666666666666666666666666666666666'
  },
  {
    name: '姓名也可以很长2333333',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
  {
    name: 'clem',
    time:'2022-11-01 20:30',
    signal: '未读',
    context:'今天你学习了吗'
  },
]
*/
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.el-header {
  padding: 0;
}
.ei-tab-pane{
  width:400px;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.el-input {
    width: 40%;
    margin-left: 3rem;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.el-container{
  height: 100%;
  width: 100%;
}
.el-header{
  padding: 0;
}
.el-cascader{
  text-align: center;
  left: 37.5%;
  width: 50%;
}
 /* .el-pagination{
  left: 35%;
}  */
.father {
  height: 100%;
  width: 100%;
}
.sonthree {
  /* height: 70%; */
  /* top: 10%; */
  width: 100%;
}
.grandsonone {
  /* height: 33%; */
  width: 100%;
}
.grandsontwo {
  /* height: 33%; */
  width: 100%;
}
.grandsonthree {
  /* height: 33%; */
  width: 100%;
}
.el-card {
  height: 15vw;
  width: 15vw;
}
.image {
  height: 12vw;
  width: 12vw;
}
.circleplus-icon{
  font-size: 100px;
  color: #8c939d;
  left: 90%;
}
</style>