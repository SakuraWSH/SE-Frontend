<template>
  <div class="father">
    筛选条件
    <el-cascader v-model="tempvalue" :options="options1" :show-all-levels = 'true'/>
    <el-row class="sonthree">
      <el-row class="grandsonone" justify="center">
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
      </el-row>
      <el-row class="grandsontwo" justify="center">
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
      </el-row>
      <el-row class="grandsonthree" justify="center">
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('https://pkuhelper.pku.edu.cn/hole/')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="goto('/detail')">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="hover" @click="jump">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image" />
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
  <el-pagination background layout="prev, pager, next" :total="1000" />
  <el-icon @click="goto('/post')"><CirclePlus /></el-icon>
  </template>
<script>
import { ElRow, ElCol, ElCard, ElDivider, ElButton,ElCascader,ElPagination,ElIcon } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css'
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
    }
  },
  methods: {
    goto(router) {
      this.$router.replace(router);
    }
  }
})
</script>

<style scoped>
.father {
  height: 100%;
  width: 100%;
}

.sonthree {
  /* height: 70%; */
  top: 25%;
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
</style>