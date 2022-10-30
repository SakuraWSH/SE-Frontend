<template>
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
              class="image7" />
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
</template>
<script>
import { ElRow, ElCol, ElCard, ElDivider, ElButton } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElCol,
    ElRow,
    ElCard,
    ElDivider,
    ElButton,
  },
  data() {
    return {}
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
  height: 70%;
  top: 25%;
  width: 100%;
}

.grandsonone {
  height: 33%;
  width: 100%;
}

.grandsontwo {
  height: 33%;
  width: 100%;
}

.grandsonthree {
  height: 33%;
  width: 100%;
}

.image {
  height: 100%;
  width: 100%;
}
</style>