
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
            //? 这个怎么点击改再想一下，src？
          </div>
          <div style="margin: 20px 0" />
          <div>
            {{User_name}}
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
            <el-button type="primary" @click="user_save">保存</el-button>
            <el-button type="primary" @click="user_upload">提交</el-button>
          </div>
          <div>
            <el-button type="success" style="margin-left: 16px" @click="drawer = true">
              详细信息
            </el-button>
            <el-drawer v-model="drawer" title="I am the title" :with-header="false">
              <span>
                {{Email}}
              </span>
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
              <el-table-column prop="title" label="标题" width="200"/>
              <el-table-column prop="tags" label="分组" width="100" />
              <el-table-column label="操作" >
                <template v-slot="scope">
                  <el-button type="text" size="small" @click="goto_Detail(scope.row.post_id)">详情</el-button>
                  <el-button type="text" size="small" @click="delete_post(scope.row.post_id)">删除</el-button>
                </template>
              </el-table-column>
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
import axios from "axios"
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
      User_name:"我的姓名",
      Email:"邮箱等其他信息",
      tabPosition: ref('left'),
      textarea: ref(''),
      drawer: ref(false),
      currentDate: ref(new Date()),
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      activeTab: 'info',
      tableData : [{
        date: '2022-11-01',
        time:'20:30',
        title: '一起学习软件工程',
        tags: '11',
      }],
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
  created(){
    this.init();
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
    //按钮实现保存功能
    /*上传头像图片:
      签名
      邮箱：Email
    */
    user_upload(){
      //按钮实现保存功能
      /*上传头像图片:
        签名
        邮箱：Email
      */
      console.log("Hello")
    },
    selectTab() {
      if(this.$route.query.tab != null){
        this.activeTab = this.$route.query.tab;
      }
    },
    init()  
    /*收取头像图片:
      姓名：User_name
      签名
      邮箱：Email
      发布内容的数组：tableData
    */
    {
      const __this = this;
      axios({
        method: "get",
        url: "/api/user/",  //?
       params: {
          uid: localStorage.getItem("UID")
        },
        
      }).then(data => {
        __this.User_name = data.data.name,
        __this.email = data.data.Email
      })
      this.get_posts()
    },
    get_posts() {
      const __this = this;
      axios({
        method: "post",
        url: "/api/post/user_post",  //?
        data: {
          user_id: localStorage.getItem("UID"),
          cur_page: 1
        },
        
      }).then(data => {
        __this.tableData = data.data.lst
      })
    },
    goto_Detail(pid){
      this.$router.push({
        path: 'detail',
        query: {
          pid: pid
        }
      })
    },
    delete_post(pid) {
      const __this = this;
      axios({
        method: "post",
        url: "/api/post/delete",  //?
        data: {
          id: pid,
        },
      }).then(data => {
        if(data.data.code == 0) {
          this.$message("删除成功！")
          this.get_posts()
        } else {
          this.$message.error("删除失败！")
        }
      })
    }
  }
})

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
