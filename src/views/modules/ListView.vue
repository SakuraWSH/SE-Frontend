<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-cascader v-model="tempvalue" :options="options1" :show-all-levels='true' />
    <el-pagination  background layout="prev, pager, next" :total="1000" />
    <div class="father"> 
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
  </el-container>
  <el-icon class="circleplus-icon" @click="goto('/post')">
    <CirclePlus />
  </el-icon>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
</script>

<script>
import { ElRow, ElCol, ElCard, ElDivider, ElButton, ElCascader, ElPagination, ElIcon,ElContainer,ElHeader } from 'element-plus';
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
    ElContainer,
    ElHeader,
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