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
            <div class="home-square">
              <el-icon>
                <DocumentChecked />
              </el-icon>
            </div>
          </el-col>
          <el-col span="8" class="home-col">
            <div class="home-square">
              <el-icon>
                <Collection />
              </el-icon>
            </div>
          </el-col>
          <el-col span="8" class="home-col">
            <div class="home-square">
              <el-icon>
                <ShoppingCartFull />
              </el-icon>
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
            <div class="home-square">
              <el-icon>
                <Flag />
              </el-icon>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square">
              <el-icon>
                <Ship />
              </el-icon>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square">
              <el-icon>
                <Connection />
              </el-icon>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square">
              <el-icon>
                <SuitcaseLine />
              </el-icon>
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
            <div class="home-square">
              <el-icon>
                <Checked />
              </el-icon>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square">
              <el-icon>
                <Guide />
              </el-icon>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square">
              <el-icon>
                <School />
              </el-icon>
            </div>
          </el-col>
          <el-col span="6" class="home-col">
            <div class="home-square">
              <el-icon>
                <Service />
              </el-icon>
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
})
</script>

<style scoped>
.el-container {
  height: 100%;
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
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
}

.home-square {
  font-size: 7vw;
  margin-left: 3vw;
  margin-right: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-row {
  border-bottom: 2px dashed;
}
</style>