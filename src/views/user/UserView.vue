
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <el-aside width="1080px">
          <el-tabs :tab-position="tabPosition" style="height: 800px" class="demo-tabs">
          <el-tab-pane label="我的信息">
            <div class>
            <el-avatar :size="50" :src="circleUrl" /> 
          </div>
          <div style="margin: 20px 0" />
          <div>
            我的名字
          </div>
          <div style="margin: 20px 0" />
          <div>
            <el-input
              v-model="textarea"
              :rows="10"
              type="textarea"
              placeholder="这个人很懒，什么也没留下"
            />
          </div>
          <el-button type="primary">修改</el-button>
          </el-tab-pane>
          <el-tab-pane label="我的发布">
            <el-table :data="tableData" @current-change="handleCurrentChange" style="width: 100%" height="500">
              <el-table-column fixed prop="date" label="时间" width="150" />
              <el-table-column prop="name" label="姓名" width="120" />
              <el-table-column prop="state" label="状态" width="120" />
              <el-table-column prop="city" label="分组" width="320" />
              <el-table-column prop="address" label="内容" width="600" />
              <el-table-column prop="zip" label="Zip" width="120" />
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="我的聊天">
            我的聊天
          </el-tab-pane>
          <el-tab-pane label="Task">
            Task
          </el-tab-pane>
        </el-tabs>
        </el-aside>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
import { ref,reactive, toRefs } from 'vue'
import { ElTable } from 'element-plus'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const tabPosition = ref('left')
const textarea = ref('')

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.el-header {
  padding: 0;
}
.ei-tab-pane{
  width:400px;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>