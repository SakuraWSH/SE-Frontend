<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>

    <el-input v-model="input1" style="width:40%; left:30%;" placeholder="标题" />
    <div class style="font-family:'Times New Roman', Times, serif;text-align: center;">分类</div>
    <div class="poston">
      <el-select v-model="value1" placeholder="请选择">
        <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1"
          @click.native="selectThing1(item)">
        </el-option>
      </el-select>
      <div v-show=isShowConent1>
        <el-select v-model="value2" placeholder="请选择">
          <el-option v-for="item in options2" :key="item.value2" :label="item.label" :value="item.value2"
            @click.native="selectThing2(item)">
          </el-option>
        </el-select>
        <div v-show=isShowConent11>
          <el-cascader v-model="tempvalue" :options="options11" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="价格" />
        </div>
        <div v-show=isShowConent12>
          <el-cascader v-model="tempvalue" :options="options12" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="价格" />
        </div>
        <div v-show=isShowConent13>
          <el-cascader v-model="tempvalue" :options="options13" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="价格" />
        </div>
      </div>
      <div v-show=isShowConent2>
        <el-select v-model="value2" placeholder="请选择">
          <el-option v-for="item in options3" :key="item.value2" :label="item.label" :value="item.value2"
            @click.native="selectThing3(item)">
          </el-option>
        </el-select>
        <div v-show=isShowConent21>
          <el-cascader v-model="tempvalue" :options="options21" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="剩余人数" />
        </div>
        <div v-show=isShowConent22>
          <el-cascader v-model="tempvalue" :options="options22" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="人数" />
        </div>
        <div v-show=isShowConent23>
          <el-cascader v-model="tempvalue" :options="options23" :show-all-levels="true" />
        </div>
        <div v-show=isShowConent24>
          <el-cascader v-model="tempvalue" :options="options24" :show-all-levels="true" />
        </div>
      </div>
      <div v-show=isShowConent3>
        <el-select v-model="value2" placeholder="请选择">
          <el-option v-for="item in options4" :key="item.value2" :label="item.label" :value="item.value2"
            @click.native="selectThing4(item)">
          </el-option>
        </el-select>
        <div v-show=isShowConent31>
          <el-cascader v-model="tempvalue" :options="options31" :show-all-levels="true" />
        </div>
        <div v-show=isShowConent32>
          <el-cascader v-model="tempvalue" :options="options32" :show-all-levels="true" />
        </div>
        <div v-show=isShowConent33>
          <el-cascader v-model="tempvalue" :options="options33" :show-all-levels="true" />
        </div>
      </div>
    </div>
    <div class style="font-family:'Times New Roman', Times, serif;text-align: center;">上传相关图片</div>
    <div class="imgUpload">
      <ul v-for="(imgStr, index) in imgList">
        <el-card><img :src="imgStr" alt="Error"></el-card>
      </ul>
      <label for="upload">
        <el-icon class="plus-icon">
          <Plus />
        </el-icon>
      </label>
      <input type="file" accept="image/jpeg/*" @change="getPicture($event)" id="upload" />
    </div>
    <div class style="font-family: 'Times New Roman', Times, serif;text-align: center;">具体描述</div>
    <el-input style="left:20%; width:60%;height:20%;" v-model="input2" />
    <el-button shadow="hover" type="post" @click="post()" round>
      发 布
    </el-button>
    
    <br />
    <br />
    <br />
    <br />
    value1:{{ value1 }}
    value2:{{ value2 }}
    value3:{{ tempvalue }}
    input1:{{ input1 }}
    input2:{{ input2 }}
    input3:{{ input3 }}
  </el-container>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
import Upload from "../../components/Upload.vue"
import { ref } from 'vue'
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import axios from 'axios';

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const imgList = reactive([]);
</script>

<script>
import { ElRow, ElCol, ElCard, ElDivider, ElButton, ElHeader, ElContainer, ElAside, ElInput, ElCascader, ElIcon, ElSelect, ElOption } from 'element-plus';
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
        label: '找人',
      },
      {
        value1: '3',
        label: '知事',
      },
      ],
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
      }],
      options3: [{
        value2: '4',
        label: '课程组队',
      },
      {
        value2: '5',
        label: '活动约人',
      },
      {
        value2: '6',
        label: '寻找伴侣',
      },
      {
        value2: '7',
        label: '招聘专区',
      }
      ],
      options4: [
        {
          value2: '8',
          label: '课程攻略',
        },
        {
          value2: '9',
          label: '生涯指北',
        },
        {
          value2: '10',
          label: '燕园生活',
        },
        {
          value2: '11',
          label: '吐槽专区',
        }
      ],
      options11: [
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
      options12: [
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
      options13: [
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
      options21: [
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
      options22: [
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
      options23: [
        {
          label: '♂',
          value: "231",
        },
        {
          value: "232",
          label: '♀'
        }
      ],
      options24: [
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
      options31: [
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
      options32: [
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
      options33: [
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
      value1: '',
      value2: '',
      value3: '',
      tempvalue: [],
    }
  },
  created(){
    this.initWebSocket();
  },
  methods: {
    uploadImage() {
      const file = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.imgList.push(reader.result);
      }
      reader.readAsDataURL(file);
    },
    getPicture(e) {
      var formData = new FormData();
      formData.append("smfile", e.target.files[0]);
      // const file = document.querySelector('input[type=file]').files[0];
      // const reader = new FileReader();

      // reader.onloadend = () => {
      //   this.imgList.push(reader.result);
      // }
      // reader.readAsDataURL(file);
      axios({
        // 请求类型
        method: "POST",
        url: "/upload",//sm.ms图床
        headers:{'Content-Type':'multipart/form-data','Authorization':'fsJvQUy5HHkm38oHL3HZpwXLYPEfjAVP'},
        data:formData
      }).then((response) => {
        // 在控制台输出响应体中图片在服务器中的url地址
        console.log(response.data)//response.data就有返回的图片地址
      });
    }, 
    initWebSocket(){
      this.socket = io('127.0.0.1:5001/post');
      this.socket.on("connect", () => {
        console.log(this.socket.id); 
      });
    },
    post() {
      var tags = this.tempvalue[0];
      if (this.tempvalue.length > 1) {
        tags = this.tempvalue[1];
      }
      this.socket.emit('Add Post Info', {
        headline: this.input1, 
        tags: tags, 
        price_and_number: this.input3,
        info: this.input2, 
        picture: "testPicture"}
      );
      // 这里还要个判断成不成功
      this.goto('/home')
    },
    goto(router) {
      this.$router.replace(router);
    },
    selectThing1(item) {
      if (item.value1 === '1') {            //options中的value
        this.isShowConent1 = true
        this.isShowConent2 = false
        this.isShowConent3 = false
      }
      else if (item.value1 === '2') {
        this.isShowConent1 = false
        this.isShowConent2 = true
        this.isShowConent3 = false
      }
      else if (item.value1 === '3') {
        this.isShowConent1 = false
        this.isShowConent2 = false
        this.isShowConent3 = true
      }
    },
    selectThing2(item) {
      if (item.value2 === '1') {            //options中的value
        this.isShowConent11 = true
        this.isShowConent12 = false
        this.isShowConent13 = false
      }
      else if (item.value2 === '2') {
        this.isShowConent11 = false
        this.isShowConent12 = true
        this.isShowConent13 = false
      }
      else if (item.value2 === '3') {
        this.isShowConent11 = false
        this.isShowConent12 = false
        this.isShowConent13 = true
      }
    },
    selectThing3(item) {
      if (item.value2 === '4') {            //options中的value
        this.isShowConent21 = true
        this.isShowConent22 = false
        this.isShowConent23 = false
        this.isShowConent24 = false
      }
      else if (item.value2 === '5') {
        this.isShowConent21 = false
        this.isShowConent22 = true
        this.isShowConent23 = false
        this.isShowConent24 = false
      }
      else if (item.value2 === '6') {
        this.isShowConent21 = false
        this.isShowConent22 = false
        this.isShowConent23 = true
        this.isShowConent24 = false
      }
      else if (item.value2 === '7') {
        this.isShowConent21 = false
        this.isShowConent22 = false
        this.isShowConent23 = false
        this.isShowConent24 = true
      }
    },
    selectThing4(item) {
      if (item.value2 === '8') {            //options中的value
        this.isShowConent31 = true
        this.isShowConent32 = false
        this.isShowConent33 = false
        this.isShowConent34 = false
      }
      else if (item.value2 === '9') {
        this.isShowConent31 = false
        this.isShowConent32 = true
        this.isShowConent33 = false
        this.isShowConent34 = false
      }
      else if (item.value2 === '10') {
        this.isShowConent31 = false
        this.isShowConent32 = false
        this.isShowConent33 = true
        this.isShowConent34 = false
      }
      else if (item.value2 === '7') {
        this.isShowConent31 = false
        this.isShowConent32 = false
        this.isShowConent33 = false
        this.isShowConent34 = true
      }
    },
  },
})
</script>

<style>
.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
  padding: 0;
}

.post {
  text-align: center;
  text-emphasis-style: 20px;
}

.poston {
  text-align: center;
}

.picture-add {
  text-align: center;
}

.el-button--post {
  font-family: "黑体";
  font-size: 16px;
  width: 16%;
  left: 42%;
  top: 2%;
  background-color: red;
  color: white;
}

.imgUpload {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 11vw;
    margin-left: 5vw;
    margin-right: 5vw;
    border: dashed 1px;
}

ul {
    list-style: none;
    display: inline;
}

.el-card {
    height: 10vw;
    width: 10vw;
    display: inline-block;
}

.el-card img {
    width: 100%;
}

input[type="file"] {
    display: none;
}

.plus-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>