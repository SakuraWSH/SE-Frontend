<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <div class = "main">
      <div class = "swiper">
        <div class = "imgpage">
          <img :src = "imgList[currentIndex]" class="img">
        </div>
        <div class="page" v-if="this.imgList.length > 1">
          <ul class = "daohang">
            <li @click="gotoPage(prevIndex)">&lt;</li>
            <li v-for="(item,index) in imgList" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
            <li @click="gotoPage(nextIndex)">&gt;</li>
          </ul>
        </div>
      </div>
      <div class = "rightdetail">
        <div class = "title">标题</div>
        <div class = "ps">备注</div>
        <div class = "price">价格</div>
        <div class = "other">购买 联系对方 举报</div>
      </div>
    </div>
    <div class = "comment">
      评论
    </div>
  </el-container>
  
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
</script>

<script>
import { ElHeader,ElContainer,ElAside } from 'element-plus';
import {defineComponent,reactive} from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components:{
    ElHeader,
    ElContainer,
    ElAside,
  },
  
  data(){
    return {
      imgList:["https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png","https://img1.baidu.com/it/u=691823892,2308173677&fm=253&fmt=auto&app=138&f=JPEG?w=861&h=500"],
      currentIndex: 0,
    } 
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    }
  },
  computed: {
  //上一张
    prevIndex() {
      if(this.currentIndex == 0) {
        return this.dataList.length - 1;
      }else{
        return this.currentIndex - 1;
      }
    },
  //下一张
    nextIndex() {
      if(this.currentIndex == this.dataList.length - 1) {
        return 0;
      }else {
        return this.currentIndex + 1;
      }
    }
}
})
</script>

<style scoped>
.el-container{
  height: 100%;
  width: 100%;
}
.el-header{
  padding: 0;
}
.main{
  height: 70%;
  width: 100%;
  display: flex;
}
.swiper{
  height: 100%;
  width: 50%;
}
.img{
  height: 100%;
  width: 100%;
}
.imgpage{
  height: 90%;
  width: 100%;
}
.page {
  background: palegreen;
  padding-top: 0;
  padding: 0;
  height: 10%;
  width: 100%;
}
ul li {
  list-style: none;
  float: left;
  width: 20%;
  height: 50%;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: palegoldenrod;
  font-size: 14px;
  background-color: aquamarine;
}
.current {
    color: orangered;
}
.rightdetail{
  height: 100%;
  width: 50%;
}
</style>