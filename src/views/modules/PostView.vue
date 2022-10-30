<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <div class = "post">
      发布页面
    </div>
    <el-input v-model="input1" placeholder="标题" />
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
          <el-cascader :options="options11" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="价格" />
        </div>
        <div v-show=isShowConent12>
          <el-cascader :options="options12" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="价格" />
        </div>
        <div v-show=isShowConent13>
          <el-cascader :options="options13" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="价格" />
        </div>
      </div>
      <div v-show=isShowConent2>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value2"
            :label="item.label"
            :value="item.value2"
            @click.native="selectThing3(item)">
          </el-option>
        </el-select>
        <div v-show=isShowConent21>
          <el-cascader :options="options21" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="剩余人数" />
        </div>
        <div v-show=isShowConent22>
          <el-cascader :options="options22" :show-all-levels="true" />
          <el-input v-model="input3" placeholder="人数" />
        </div>
        <div v-show=isShowConent23>
          <el-cascader :options="options23" :show-all-levels="true" />
        </div>
        <div v-show=isShowConent24>
          <el-cascader :options="options24" :show-all-levels="true" />
        </div>
      </div>
      <div v-show=isShowConent3>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options4"
            :key="item.value2"
            :label="item.label"
            :value="item.value2"
            @click.native="selectThing4(item)">
          </el-option>
        </el-select>
        <div v-show=isShowConent31>
          <el-cascader :options="options31" :show-all-levels="true" />
        </div>
        <div v-show=isShowConent32>
          <el-cascader :options="options32" :show-all-levels="true" />
        </div>
        <div v-show=isShowConent33>
          <el-cascader :options="options33" :show-all-levels="true" />
        </div>
      </div>
    </div>
    <div class = "picture-add">
    </div>
    <el-input v-model="input2" placeholder="详情" />
    <el-button>
      发布
    </el-button>
  value1:{{ value1 }}
  value2:{{ value2 }}
  value3:{{ value3 }}
  input1:{{ input1 }}
  input2:{{ input2 }}
  input3:{{ input3 }}
  </el-container>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
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
        label: '找人',
      }, 
      {
        value1: '3',
        label: '知事',
      } ,
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
      options4:[
      {
        value2: '8',
        label:'课程攻略',
      },
      {
        value2: '9',
        label:'生涯指北',
      },
      {
        value2: '10',
        label:'燕园生活',
      },
      {
        value2:'11',
        label:'吐槽专区',
      }
      ],
      options11:[
      {
        label:'买',
        children:[
        {
          value3:'1111',
          label:'专业课',
        },
        {
          value3:'1112',
          label:"公选课",
        },
        {
          value3:'1113',
          label:"思政课",
        },
        {
          value3:'1114',
          label:"通选课",
        },
        {
          value3:'1115',
          label:"体育课",
        },
        {
          value3:'1116',
          label:"英语课",
        },
        {
          value3:'1117',
          label:"其他"
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
          label:"公选课",
        },
        {
          label:"思政课",
        },
        {
          label:"通选课",
        },
        {
          label:"体育课",
        },
        {
          label:"英语课",
        },
        {
          label:"其他"
        },
        ],
      }
      ],
      options12:[
      {
        label:"买",
        children:[
        {
          label:"小说",
        },
        {
          label:"戏剧",
        },
        {
          label:"诗歌",
        },
        {
          label:"科幻",
        },
        {
          label:"经管",
        },
        {
          label:"生活",
        },
        {
          label:"其他"
        }
        ],
      },
      {
        label:"卖",
        children:[
        {
          label:"小说",
        },
        {
          label:"戏剧",
        },
        {
          label:"诗歌",
        },
        {
          label:"科幻",
        },
        {
          label:"经管",
        },
        {
          label:"生活",
        },
        {
          label:"其他"
        }
        ],
      }
      ],
      options13:[
      {
        label:"买",
        children:[
        {
          label:"宿舍用电器",
        },
        {
          label:"数码用品",
        },
        {
          label:"交通工具",
        },
        {
          label:"二手服装",
        },
        {
          label:"食品药品",
        },
        {
          label:"其他"
        }
        ],
      },
      {
        label:"卖",
        children:[
        {
          label:"宿舍用电器",
        },
        {
          label:"数码用品",
        },
        {
          label:"交通工具",
        },
        {
          label:"二手服装",
        },
        {
          label:"食品药品",
        },
        {
          label:"其他"
        }
        ],
      }
      ],
      options21:[
      {
        label:"找组",
        children:[
        {
          label:"理学部",
        },
        {
          label:"经管学部",
        },
        {
          label:"人文学部",
        },
        {
          label:"其他"
        }
        ],
      },
      {
        label:"找组员",
        children:[
        {
          label:"理学部",
        },
        {
          label:"经管学部",
        },
        {
          label:"人文学部",
        },
        {
          label:"其他"
        }
        ],
      }
      ],
      options22:[
      {
        label:"找人",
        children:[
        {
          label:"桌游",
        },
        {
          label:"开黑",
        },
        {
          label:"参观展览",
        },
        {
          label:"其他"
        }
        ],
      },
      {
        label:"找局",
        children:[
        {
          label:"桌游",
        },
        {
          label:"开黑",
        },
        {
          label:"参观展览",
        },
        {
          label:"其他"
        }
        ],
      }
      ],
      options23:[
        {
          label:'♂'
        },
        {
          label:'♀'
        }
      ],
      options24:[
        {
          label:'找活',
          children:[
            {
              label:'科研',
            },
            {
              label:'学工',
            },
            {
              label:'实习',
            },
          ]
        },
        {
          label:'招人',
          children:[
            {
              label:'科研',
            },
            {
              label:'学工',
            },
            {
              label:'实习',
            },
          ]
        }
      ],
      options31:[
        {
          label:'理学部',
        },
        {
          label:'经管学部',
        },
        {
          label:'人文学部',
        }
      ],
      options32:[
        {
          label:'求职',
          children:[
            {
              label:'信息科学技术学院',
            },
            {
              label:'光华管理学院',
            },
            {
              label:'元培学院',
            },
            {
              label:'其他',
            }
          ]
        },
        {
          label:'留学',
          children:[
            {
              label:'信息科学技术学院',
            },
            {
              label:'光华管理学院',
            },
            {
              label:'元培学院',
            },
            {
              label:'其他',
            }
          ]
        },
        {
          label:'考研',
          children:[
            {
              label:'信息科学技术学院',
            },
            {
              label:'光华管理学院',
            },
            {
              label:'元培学院',
            },
            {
              label:'其他',
            }
          ]
        },
        {
          label:'保研',
          children:[
            {
              label:'信息科学技术学院',
            },
            {
              label:'光华管理学院',
            },
            {
              label:'元培学院',
            },
            {
              label:'其他',
            }
          ]
        }
      ],
      options33:[
        {
          label:'食堂',
        },
        {
          label:'咖啡厅',
        },
        {
          label:'景点',
        }
      ],
      value1: '',
      value2: '',
      value3: '',
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
    },
    selectThing3(item){
      if(item.value2 === '4'){            //options中的value
        this.isShowConent21 = true
        this.isShowConent22 = false
        this.isShowConent23 = false
        this.isShowConent24 = false
      }
      else if(item.value2 === '5') {
        this.isShowConent21 = false
        this.isShowConent22 = true
        this.isShowConent23 = false
        this.isShowConent24 = false
      }
      else if(item.value2 === '6') {
        this.isShowConent21 = false
        this.isShowConent22 = false
        this.isShowConent23 = true
        this.isShowConent24 = false
      }
      else if(item.value2 === '7') {
        this.isShowConent21 = false
        this.isShowConent22 = false
        this.isShowConent23 = false
        this.isShowConent24 = true
      }
    },
    selectThing4(item){
      if(item.value2 === '8'){            //options中的value
        this.isShowConent31 = true
        this.isShowConent32 = false
        this.isShowConent33 = false
        this.isShowConent34 = false
      }
      else if(item.value2 === '9') {
        this.isShowConent31 = false
        this.isShowConent32 = true
        this.isShowConent33 = false
        this.isShowConent34 = false
      }
      else if(item.value2 === '10') {
        this.isShowConent31 = false
        this.isShowConent32 = false
        this.isShowConent33 = true
        this.isShowConent34 = false
      }
      else if(item.value2 === '7') {
        this.isShowConent31 = false
        this.isShowConent32 = false
        this.isShowConent33 = false
        this.isShowConent34 = true
      }
    },
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