<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-input v-model = "input1" size="large" class="w-50 m-2" placeholder="搜索" style="width:40%;left:30%;top:2%;" @keyup.enter="search()">
    </el-input>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing1" v-model="postTags" :options="options1" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing2" v-model="postTags" :options="options2" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing3" v-model="postTags" :options="options3" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing4" v-model="postTags" :options="options4" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing5" v-model="postTags" :options="options5" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing6" v-model="postTags" :options="options6" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing7" v-model="postTags" :options="options7" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing8" v-model="postTags" :options="options8" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing9" v-model="postTags" :options="options9" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing10" v-model="postTags" :options="options10" :show-all-levels='true' @change="search_by_label()"/>
    <el-cascader style="top:4%;width:20%;left:40%;" v-if = "selectthing11" v-model="postTags" :options="options11" :show-all-levels='true' @change="search_by_label()"/>
    <div class="father" style="top:8%;">
      <el-row v-for="(cardRow, index) of cards" :key="index" >
        <el-col :span="4" v-for="(item, cardCol) of cardRow" :key="item.post_id" :offset="cardCol > 0 ? 0 : 2">
          <el-card shadow="hover" @click="goto_Detail(item.post_id)">
            <post-item
              :key="index"
              :post_id="item.post_id"
              :title="item.title"
              :imgUrl="item.imgUrl"
            ></post-item>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-pagination style="top:2%;" background layout="prev, pager, next" :total="2"></el-pagination> -->
      <el-pagination
        background
        :page-size="15"
        :pager-count="5"
        layout="prev, pager, next"
        :total ="total"
        @current-change="handleCurrentChange">
      </el-pagination>
      <el-icon class="circleplus-icon" @click="goto('/post')">
        <CirclePlus />
      </el-icon>
    </div>
  </el-container>



</template>

<!-- <script setup>
import NavBar from "../../components/NavBar.vue"
import { ref } from 'vue'
const input1 = ref('')
</script> -->

<script setup>
import NavBar from "../../components/NavBar.vue"
</script>

<script>
import axios from 'axios';
// console.log(selectthing1)
import { ElRow, ElCol, ElCard, ElDivider, ElButton, ElCascader, ElPagination, ElIcon, ElContainer, ElHeader, ElInput } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css';
import { ref } from 'vue'
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
      options2: [
        {
          label: "买",
          value: '121',
          children: [
            {
              value: '1211',
              label: "小说",
            },
            {
              value: '1212',
              label: "戏剧",
            },
            {
              value: '1213',
              label: "诗歌",
            },
            {
              value: '1214',
              label: "科幻",
            },
            {
              value: '1215',
              label: "经管",
            },
            {
              value: '1216',
              label: "生活",
            },
            {
              value: '1217',
              label: "其他"
            }
          ],
        },
        {
          label: "卖",
          value: "122",
          children: [
            {
              value: "1221",
              label: "小说",
            },
            {
              value: "1222",
              label: "戏剧",
            },
            {
              value: "1223",
              label: "诗歌",
            },
            {
              value: "1224",
              label: "科幻",
            },
            {
              value: "1225",
              label: "经管",
            },
            {
              value: "1226",
              label: "生活",
            },
            {
              value: "1227",
              label: "其他"
            }
          ],
        }
      ],
      options3: [
        {
          label: "买",
          value: "131",
          children: [
            {
              value: "1311",
              label: "宿舍用电器",
            },
            {
              value: "1312",
              label: "数码用品",
            },
            {
              value: "1313",
              label: "交通工具",
            },
            {
              value: "1314",
              label: "二手服装",
            },
            {
              value: "1315",
              label: "食品药品",
            },
            {
              value: "1316",
              label: "其他"
            }
          ],
        },
        {
          label: "卖",
          value: '132',
          children: [
            {
              value: '1321',
              label: "宿舍用电器",
            },
            {
              value: '1322',
              label: "数码用品",
            },
            {
              value: '1323',
              label: "交通工具",
            },
            {
              value: '1324',
              label: "二手服装",
            },
            {
              value: '1325',
              label: "食品药品",
            },
            {
              value: '1326',
              label: "其他"
            }
          ],
        }
      ],
      options4: [
        {
          label: "找组",
          value: '211',
          children: [
            {
              value: '2111',
              label: "理学部",
            },
            {
              value: '2112',
              label: "经管学部",
            },
            {
              value: '2113',
              label: "人文学部",
            },
            {
              value: '2114',
              label: "其他"
            }
          ],
        },
        {
          label: "找组员",
          value: '212',
          children: [
            {
              value: '2121',
              label: "理学部",
            },
            {
              value: '2122',
              label: "经管学部",
            },
            {
              value: '2123',
              label: "人文学部",
            },
            {
              value: '2124',
              label: "其他"
            }
          ],
        }
      ],
      options5: [
        {
          label: "找人",
          value: "221",
          children: [
            {
              value: "2211",
              label: "桌游",
            },
            {
              value: "2212",
              label: "开黑",
            },
            {
              value: "2213",
              label: "参观展览",
            },
            {
              value: "2214",
              label: "其他"
            }
          ],
        },
        {
          label: "找局",
          value: "222",
          children: [
            {
              value: "2221",
              label: "桌游",
            },
            {
              value: "2222",
              label: "开黑",
            },
            {
              value: "2223",
              label: "参观展览",
            },
            {
              value: "2224",
              label: "其他"
            }
          ],
        }
      ],
      options6: [
        {
          label: '♂',
          value: "231",
        },
        {
          value: "232",
          label: '♀'
        }
      ],
      options7: [
        {
          label: '找活',
          value: "241",
          children: [
            {
              value: "2411",
              label: '科研',
            },
            {
              value: "2412",
              label: '学工',
            },
            {
              value: "2413",
              label: '实习',
            },
          ]
        },
        {
          label: '招人',
          value: "242",
          children: [
            {
              value: "2421",
              label: '科研',
            },
            {
              value: "2422",
              label: '学工',
            },
            {
              value: "2423",
              label: '实习',
            },
          ]
        }
      ],
      options8: [
        {
          value: '311',
          label: '理学部',
        },
        {
          value: '312',
          label: '经管学部',
        },
        {
          value: '313',
          label: '人文学部',
        }
      ],
      options9: [
        {
          label: '求职',
          value: '321',
          children: [
            {
              value: '3211',
              label: '信息科学技术学院',
            },
            {
              value: '3212',
              label: '光华管理学院',
            },
            {
              value: '3213',
              label: '元培学院',
            },
            {
              value: '3214',
              label: '其他',
            }
          ]
        },
        {
          label: '留学',
          value: "322",
          children: [
            {
              value: "3221",
              label: '信息科学技术学院',
            },
            {
              value: "3222",
              label: '光华管理学院',
            },
            {
              value: "3223",
              label: '元培学院',
            },
            {
              value: "3224",
              label: '其他',
            }
          ]
        },
        {
          label: '考研',
          value: '323',
          children: [
            {
              value: '3231',
              label: '信息科学技术学院',
            },
            {
              value: '3232',
              label: '光华管理学院',
            },
            {
              value: '3233',
              label: '元培学院',
            },
            {
              value: '3234',
              label: '其他',
            }
          ]
        },
        {
          label: '保研',
          value: '324',
          children: [
            {
              value: '3241',
              label: '信息科学技术学院',
            },
            {
              value: '3242',
              label: '光华管理学院',
            },
            {
              value: '3243',
              label: '元培学院',
            },
            {
              value: '3244',
              label: '其他',
            }
          ]
        }
      ],
      options10: [
        {
          label: '食堂',
          value: '331',
        },
        {
          label: '咖啡厅',
          value: '332',
        },
        {
          label: '景点',
          value: '333',
        }
      ],
      postTags: '',
      postItems: [
        {
          post_id: 1,
          title: "test",
          imgUrl: "noNeedNow"
        }
      ],
      selectthing1:false,
      selectthing2:false,
      selectthing3:false,
      selectthing4:false,
      selectthing5:false,
      selectthing6:false,
      selectthing7:false,
      selectthing8:false,
      selectthing9:false,
      selectthing10:false,
      selectthing11:false,
      total : 0,
      page : 0,
      input1: ref(''),
    }
  },
  computed: {
    cards() {
      const cards = []
      if (this.postItems) {
        this.postItems.forEach((item, index) => {
          const row = Math.floor(index / 5)
          if (!cards[row]) {
            cards[row] = []
          }
          cards[row].push(item)
        })
      }
      return cards
    }
  },
  created(){
    this.init();
  },
  watch:{
    $route(to,from){
      console.log(from.path);//从哪来
      console.log(to.path);//到哪去
      location.reload();
    },
  },
  methods: {
    search_by_label(){
      console.log(this.postTags.slice(-1)[0])
      const __this = this;
      axios({
        method: "get",
        url: "/api/post/list",
        params:{
          tags : this.postTags.slice(-1)[0],
          cur_page: 1,
        },
      }).then(data => {
        console.log(data.data.lst)
        __this.postItems = data.data.lst;
        //接收到post的总数量
        __this.total = data.data.total_post;
        console.log(this.total)
      })
    },
    search(){
      console.log(this.input1)
      const __this = this;
      axios({
        method: "get",
        url: "/api/post/key-list",
        params: {
          key_words : this.input1,
          cur_page: 1,
        },
      }).then(data => {
        console.log(data.data.lst)
        __this.postItems = data.data.lst;
        //接收到post的总数量
        __this.total = data.data.total_post;
        console.log(this.total)
      })
    },
    handleCurrentChange(val) {
      //传输页码的标志和翻页
      console.log(`当前页: ${val}`);
      this.page = val
      const __this = this;
      axios({
        method: "get",
        url: "/api/post/list",
        params: {
          tags: this.$route.query.tags,
          cur_page: this.page,
        },
      }).then(data => {
        console.log(data.data.lst)
        __this.postItems = data.data.lst;
        //接收到post的总数量
        __this.total = data.data.total_post;
        console.log(this.total)
      })
    },
    goto(router) {
      this.$router.replace(router);
      console.log(this.$route.query.tags)
    },
    goto_Detail(pid){
      this.$router.push({
        path: 'detail',
        query: {
          pid: pid
        }
      })
    },
    
    init(){
      if(this.$route.query.key){
        console.log(this.$route.query.key);
        const __this = this;
        axios({
          method: "get",
          url: "/api/post/key-list",
          params: {
            key_words : this.$route.query.key,
            cur_page: 1,
          },
        }).then(data => {
          console.log(data.data.lst)
          __this.postItems = data.data.lst;
          //接收到post的总数量
          __this.total = data.data.total_post;
          console.log(this.total)
        })
      }
      else{
        if(this.$route.query.tags == 11){
          this.selectthing1 = true;
        }
        if(this.$route.query.tags == 12){
          this.selectthing2 = true;
        }
        if(this.$route.query.tags == 13){
          this.selectthing3 = true;
        }
        if(this.$route.query.tags == 21){
          this.selectthing4 = true;
        }
        if(this.$route.query.tags == 22){
          this.selectthing5 = true;
        }
        if(this.$route.query.tags == 23){
          this.selectthing6 = true;
        }
        if(this.$route.query.tags == 24){
          this.selectthing7 = true;
        }
        if(this.$route.query.tags == 31){
          this.selectthing8 = true;
        }
        if(this.$route.query.tags == 32){
          this.selectthing9 = true;
        }
        if(this.$route.query.tags == 33){
          this.selectthing10 = true;
        }
        console.log(this.selectthing1)
        const __this = this;
        axios({
          method: "get",
          url: "/api/post/list",
          params: {
            tags: this.$route.query.tags,
            cur_page: 1,
          },
        }).then(data => {
          console.log(data.lst)
          __this.postItems = data.data.lst;
          //接收到post的总数量
          __this.total = data.data.total_post;
          console.log(this.total)
        })
      }
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