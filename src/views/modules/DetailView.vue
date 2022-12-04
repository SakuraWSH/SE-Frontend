<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <div class="main">
      <div class="swiper">
        <div class="block">
          <el-carousel>
            <el-carousel-item v-for="item in imgList" :key="item.name">
              <img class = "picture" :src = "item.src" style="height:100%;width:100%;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="rightdetail">
        <div class="title">{{detailItems.headline}}</div>
        <el-divider></el-divider>
        <div class="ps">
          {{ detailItems.info }}
        </div>
        <div class="price">{{detailItems.price_and_number}}</div>
        <el-row>
          <el-button shadow="hover" type="buy" round>购买</el-button>
          <el-button shadow="hover" type="contact" round>联系发布者</el-button>
          <el-button shadow="hover" type="report" round>举报</el-button>
        </el-row>
      </div>
    </div>
    <div class="comment">
      <div style='font-family: "宋体" !important; font-size: 42px !important'>评论</div>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="comment"
      ></el-input>
      <el-button shadow="hover" round class="sendButton" @click="sendComment()">发送</el-button>
    </div>
    <div class="commentItem" v-for="(cmt, index) of comments" :key="index">
      <div>
        <span>{{cmt.username}}</span>
        <span style="color: gray; margin-left: 2em;">{{cmt.time}}</span>
      </div>
      <div>{{cmt.content}}</div>
    </div>
  </el-container>

</template>

<!-- <script setup>
import NavBar from "../../components/NavBar.vue"
</script> -->

<script setup>
import NavBar from "../../components/NavBar.vue"
</script>

<script>
import axios from 'axios'
import { ElHeader, ElContainer, ElAside, ElButton, ElCarousel, ElCarouselItem, ElDivider, ElCol, ElRow, ElIcon } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElHeader,
    ElContainer,
    ElAside,
    ElButton,
    ElCarousel,
    ElCarouselItem,
    ElDivider,
    ElCol,
    ElRow,
    ElIcon
  },

  data() {
    return {
      imgList: [
        {
          name : "spring",
          src: "https://pic.imgdb.cn/item/638c50cb16f2c2beb17597de.png"
        },
        {
          name : "summer",
          src: "https://pic.imgdb.cn/item/638c50fb16f2c2beb175d40c.png"
        },
        {
          name : "autumn",
          src: "https://pic.imgdb.cn/item/638c511f16f2c2beb17608b7.png"
        },
        {
          name : "winter",
          src: "https://pic.imgdb.cn/item/638c512f16f2c2beb1762271.png"
        }
      ],
      currentIndex: 0,
      detailItems:[{
        headline:'',
        info:'',
        picture:'',
        price_and_number:'',
      }],
      comment: '',
      comments: []
    }
  },
  created(){
    this.init();
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    init() {
      const __this = this;
      axios({
        method: "get",
        url: "/api/post/detail",
        params: {
          id: __this.$route.query.pid,
        },
      }).then(data => {
        console.log(data);
        __this.detailItems = data.data;
      });
      this.fetchComments();
    },
    sendComment() {
      if (this.comment.length == 0) {
        this.$message({
          message: '你好像什么都没输入哦？',
          type: "warning"
        })
        return;
      }
      axios({
        method: "post",
        url: "/api/post/comment/add",
        data: {
          pid: this.$route.query.pid,
          uid: localStorage.getItem("UID"),
          content: this.comment
        }
      }).then(data => {
        if (data.data.code == 0) {
          this.$message('评论成功！')
          this.fetchComments();
        } else {
          this.$message.error('评论失败qwq')
        }
      });
      
    },
    fetchComments() {
      const __this = this;
      axios({
        method: "get",
        url: "/api/post/comment/get",
        params: {
          via: "post",
          pid: this.$route.query.pid
        }
      }).then(data => {
        if (data.data.code == 0) {
          __this.comments = data.data.comments
        } else {
          this.$message.error('获取评论失败qwq')
        }
      });
    }
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.dataList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  }
})
</script>

<style scoped>
.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
  padding: 0;
}

.main {
  height: 60%;
  width: 100%;
  display: flex;
}

.swiper {
  height: 100%;
  width: 50%;
}

.block {
  height: 80%;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.rightdetail {
  height: 50%;
  width: 50%;
}

.title {
  font-size: 50px;
  font-family: "黑体";

}

.ps {
  font-size: 18px;
  font-family: "宋体";
}

.price {
  font-size: 40px;
  color: red;
  font-family: 'Times New Roman', Times, serif;
}

.el-button--buy {
  font-size: 15px;
  font-family: "黑体";
  background-color: red;
  color: white;
}

.el-button--contact {
  font-size: 15px;
  font-family: "黑体";
  background-color: lightgray;
}

.el-button--report {
  font-size: 15px;
  font-family: "黑体";
  background-color: red;
  color: white;
}

.comment {
  margin-top: 4em;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2em;
}

.commentItem {
  margin-bottom: 1em;
  margin-left: 10%;
  margin-right: 10%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-divider{
  margin: 0 0;
  background: 0 0;
}

.sendButton {
  float: right;
  margin-top: 1em;
}
</style>
