<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <div class="home-main">
      <img alt="logo" src="../assets/images/logo.png" class="home-logo" />
      <div class="home-row-wrapper">
        <div class="home-row-title">
          淘物
          <el-icon>
            <CaretRight />
          </el-icon>
        </div>
        <el-row class="home-row" justify="center">
          <el-col span="8" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 1" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 1">
                <DocumentChecked />
              </el-icon>
              <div v-if="mouseOn == 1" class="icon-text">
                课 程<br />
                资 料
              </div>
            </div>
          </el-col>
          <el-col span="8" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 2" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 2">
                <Collection />
              </el-icon>
              <div v-if="mouseOn == 2" class="icon-text">
                书 籍<br />
                专 区
              </div>
            </div>
          </el-col>
          <el-col span="8" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 3" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 3">
                <ShoppingCartFull />
              </el-icon>
              <div v-if="mouseOn == 3" class="icon-text">
                日 常<br />
                用 品
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="home-row-wrapper">
        <div class="home-row-title">
          找人
          <el-icon>
            <CaretRight />
          </el-icon>
        </div>
        <el-row class="home-row" justify="center">
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 4" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 4">
                <Flag />
              </el-icon>
              <div v-if="mouseOn == 4" class="icon-text">
                课 程<br />
                组 队
              </div>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 5" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 5">
                <Ship />
              </el-icon>
              <div v-if="mouseOn == 5" class="icon-text">
                活 动<br />
                约 人
              </div>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 6" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 6">
                <Connection />
              </el-icon>
              <div v-if="mouseOn == 6" class="icon-text">
                寻 找<br />
                伴 侣
              </div>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 7" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 7">
                <SuitcaseLine />
              </el-icon>
              <div v-if="mouseOn == 7" class="icon-text">
                招 聘<br />
                信 息
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="home-row-wrapper">
        <div class="home-row-title">
          知事
          <el-icon>
            <CaretRight />
          </el-icon>
        </div>
        <el-row class="home-row bottom-row" justify="center">
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 8" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 8">
                <Checked />
              </el-icon>
              <div v-if="mouseOn == 8" class="icon-text">
                课 程<br />
                攻 略
              </div>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 9" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 9">
                <Guide />
              </el-icon>
              <div v-if="mouseOn == 9" class="icon-text">
                生 涯<br />
                指 北
              </div>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 10" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 10">
                <School />
              </el-icon>
              <div v-if="mouseOn == 10" class="icon-text">
                燕 园<br />
                生 活
              </div>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square" @click="goto('/list')" @mouseenter="mouseOn = 11" @mouseleave="mouseOn = 0">
              <el-icon v-if="mouseOn != 11">
                <Service />
              </el-icon>
              <div v-if="mouseOn == 11" class="icon-text">
                吐 槽<br />
                专 区
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-container>

</template>

<script setup>
import NavBar from "../components/NavBar.vue"
</script>

<script>
import { ElCard, ElRow, ElCol, ElContainer, ElHeader, ElMain, ElIcon } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
  components: {
    ElCard,
    ElRow,
    ElCol,
    ElContainer,
    ElHeader,
    ElMain,
    ElIcon,
  },
  data() {
    return {
      mouseOn: 0,
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
.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
  padding: 0;
}

.home-main {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-logo {
  height: 20%;
  margin-bottom: 2rem;
}

.home-row-wrapper {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
}

.home-row-title {
  width: 10%;
  height: 100%;
  /* border: 1px solid; */
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-row {
  height: 100%;
  width: 80%;
  border-top: 2px dashed;
  margin-left: 1rem;
}

.home-col {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-square {
  font-size: 7vw;
  margin-left: 3vw;
  margin-right: 3vw;
  height: 8vw;
  width: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
}

.home-square:hover {
  cursor: pointer;
}

.icon-text {
  font-size: 2.5vw;
}

.bottom-row {
  border-bottom: 2px dashed;
}
</style>