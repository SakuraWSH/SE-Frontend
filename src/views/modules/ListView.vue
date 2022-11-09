<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-input size="large" class="w-50 m-2" placeholder="搜索" style="width:40%;left:30%;top:2%;" @keyup.enter="search()">
    </el-input>
    <el-cascader style="top:4%;width:20%;left:40%;" v-model="tempvalue" :options="options1" :show-all-levels='true' />
    <div class="father" style="top:8%;">
      <el-row v-for="(cardRow, index) of cards" :key="index" >
        <el-col :span="4" v-for="(item, cardCol) of cardRow" :key="item.post_id" :offset="cardCol > 0 ? 2 : 1">
          <el-card shadow="hover" @click="goto('/detail?pid={{item.post_id}}')">
            <post-item
              :key="index"
              :post_id="item.post_id"
              :title="item.title"
              :imgUrl="item.imgUrl"
            ></post-item>
          </el-card>
        </el-col>
      </el-row>
      <el-pagination style="top:2%;" background layout="prev, pager, next" :total="1000"></el-pagination>
      <el-icon class="circleplus-icon" @click="goto('/post')">
        <CirclePlus />
      </el-icon>
    </div>
  </el-container>



</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
</script>

<script>
import { ElRow, ElCol, ElCard, ElDivider, ElButton, ElCascader, ElPagination, ElIcon, ElContainer, ElHeader, ElInput } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css';
export default defineComponent({
  components: {
    ElCol,
    ElRow,
    ElCard,
    ElDivider,
    ElButton,
    ElCascader,
    ElPagination,
    ElIcon,
    ElContainer,
    ElHeader,
    ElInput,
    PostItem: {
      props: ['title', 'imgUrl', 'post_id'],
      // 这里图片暂时用随机图，因为还得写个图床 = =
      template: ' \
        <img style="max-width: 12vw; max-height: 12vw; object-fit: fill;"\
          src="https://api.likepoems.com/img/sina/nature" \
        /> \
        <div>{{title}}</div>'
    },
  },
  data() {
    return {
      options1: [
        {
          label: '买',
          value: '111',
          children: [
            {
              value: '1111',
              label: '专业课',
            },
            {
              value: '1112',
              label: "公选课",
            },
            {
              value: '1113',
              label: "思政课",
            },
            {
              value: '1114',
              label: "通选课",
            },
            {
              value: '1115',
              label: "体育课",
            },
            {
              value: '1116',
              label: "英语课",
            },
            {
              value: '1117',
              label: "其他"
            }
          ],
        },
        {
          label: "卖",
          value: '112',
          children: [
            {
              value: '1121',
              label: "专业课",
            },
            {
              value: '1122',
              label: "公选课",
            },
            {
              value: '1123',
              label: "思政课",
            },
            {
              value: '1124',
              label: "通选课",
            },
            {
              value: '1125',
              label: "体育课",
            },
            {
              value: '1126',
              label: "英语课",
            },
            {
              value: '1127',
              label: "其他"
            },
          ],
        }
      ],
      postItems: [
        {
          post_id: 1,
          title: "test",
          imgUrl: "noNeedNow"
        }
      ]
    }
  },
  computed: {
    cards() {
      const cards = []
      this.postItems.forEach((item, index) => {
        const row = Math.floor(index / 5)
        if (!cards[row]) {
          cards[row] = []
        }
        cards[row].push(item)
      })
      return cards
    }
  },
  created(){
    this.initWebSocket();
  },
  methods: {
    goto(router) {
      this.$router.replace(router);
    },
    initWebSocket(){
      this.socket = io('127.0.0.1:5001/list');
      this.socket.on("connect", () => {
        console.log(this.socket.id); 
        this.socket.emit('Search Post Info', {
          tags: this.$route.query.tags,
          cur_page: 1
        })
      });
      const __this = this;
      this.socket.on('post_info_response', function(data) {
        // 还有页码等信息，出于时间关系你们写吧
        console.log(data.lst)
        __this.postItems = data.lst;
      });
    }
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

.el-cascader {
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
.circleplus-icon {
  font-size: 100px;
  color: #8c939d;
  left: 85%;
}
</style>