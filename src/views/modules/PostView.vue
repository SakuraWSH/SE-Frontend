<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>

    <el-form ref="form" :model="form" label-width="80px">

    <el-form-item label="标题">
      <el-input v-model="input1"/>
    </el-form-item>
    <el-form-item label="分类">
      <el-cascader-panel :options="options" v-model="postTags" />
    </el-form-item>
    <el-form-item v-if="checkIfNeedPrice()" :label="checkIfNeedPrice()">
      <el-input v-model="input3" />
    </el-form-item>
    <el-form-item label="上传图片">
      <div class="imgUpload">
        <ul v-for="(imgStr, index) in imgList">
          <el-card><img :src="imgStr" alt="Error"></el-card>
        </ul>
        <label for="upload">
          <el-icon class="plus-icon">
            <Plus />
          </el-icon>
        </label>
        <input type="file" accept="image/jpeg/*" @change="uploadImage()" id="upload" />
      </div>
    </el-form-item>
    <el-form-item label="具体描述">
      <el-input type="textarea" v-model="input2" />
    </el-form-item>
    <el-form-item>
      <el-button shadow="hover" type="post" @click="post()" round>
        发 布
      </el-button>
    </el-form-item>
  </el-form>
  </el-container>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue"
</script>

<!-- <script setup>
import NavBar from "../../components/NavBar.vue"
import Upload from "../../components/Upload.vue"
import { ref } from 'vue'
import axios from 'axios';
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const imgList = reactive([]);
const imgFile = reactive([]);
</script> -->

<script>
import { ElRow, ElCol, ElCard, ElDivider, ElButton, ElHeader, ElContainer, ElAside, ElInput, ElCascader, ElIcon, ElSelect, ElOption } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../../node_modules/element-plus/theme-chalk/index.css';
import Upload from "../../components/Upload.vue"
import { ref } from 'vue'
import axios from 'axios';
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
  methods: {
    base64ImgtoFile(dataurl,filename = 'file'){
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let suffix = mime.split('/')[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], `${filename}.${suffix}`, {
        type: mime
      })
    },
    uploadImage() {
      const file = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.imgList.push(reader.result);
        this.imgFile.push(this.base64ImgtoFile(reader.result));
      }
      reader.readAsDataURL(file);
    },
    getPicture(e) {
      var formData = new FormData();
      formData.append("smfile", e.target.files[0]);
      const file = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.imgList.push(reader.result);
      }
      reader.readAsDataURL(file);
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
    checkIfNeedPrice() {
      if(!this.postTags || this.postTags.length < 2) {
        return false;
      }
      const priceArray = ['11', '12', '13'];
      if(priceArray.includes(this.postTags[1])) {
        return '价格';
      }
      if(this.postTags[1] == '21') {
        return '剩余人数';
      }
      if(this.postTags[1] == '22') {
        return '人数';
      }
      return false;
    },
    post() {
      if (this.postTags.length < 2) {
        this.$message({message: '请选择完整的分类！', type: 'warning'});
        return
      }
      if (this.imgList.length > 0) {
        console.log(this.imgList)
        var base64Img = this.imgList[0];
        var imgFile = this.base64ImgtoFile(base64Img);
        this.imgFile.push(imgFile);
      }
      axios({
        method: "post",
        url: "/api/post/add",
        data: {
          user_id: localStorage.getItem("UID"),
          headline: this.input1, 
          tags: this.postTags, 
          price_and_number: this.input3,
          info: this.input2, 
          picture: "testPicture"
        },
      }).then(data => {
        this.$message({message: "发布成功！", type: "success"})
        this.goto('/home')
        console.log(data)
        // 这里还要加个判断错误码然后进行错误提示
      })
    },
    goto(router) {
      this.$router.replace(router);
    },
  },
  data() {
    return {
      options: [{ value: '1', label: '淘物', children: [{ value: '11', label:
'课程资料', children: [ { label: '买', value: '111', children: [ { value:
'1111', label: '专业课', }, { value: '1112', label: "公选课", }, { value:
'1113', label: "思政课", }, { value: '1114', label: "通选课", }, { value:
'1115', label: "体育课", }, { value: '1116', label: "英语课", }, { value:
'1117', label: "其他" } ], }, { label: "卖", value: '112', children: [ { value:
'1121', label: "专业课", }, { value: '1122', label: "公选课", }, { value:
'1123', label: "思政课", }, { value: '1124', label: "通选课", }, { value:
'1125', label: "体育课", }, { value: '1126', label: "英语课", }, { value:
'1127', label: "其他" }, ], } ] }, { value: '12', label: '书籍专区', children: [
{ label: "买", value: '121', children: [ { value: '1211', label: "小说", }, {
value: '1212', label: "戏剧", }, { value: '1213', label: "诗歌", }, { value:
'1214', label: "科幻", }, { value: '1215', label: "经管", }, { value: '1216',
label: "生活", }, { value: '1217', label: "其他" } ], }, { label: "卖", value:
"122", children: [ { value: "1221", label: "小说", }, { value: "1222", label:
"戏剧", }, { value: "1223", label: "诗歌", }, { value: "1224", label: "科幻", },
{ value: "1225", label: "经管", }, { value: "1226", label: "生活", }, { value:
"1227", label: "其他" } ], } ], }, { value: '13', label: '日常用品', children: [
{ label: "买", value: "131", children: [ { value: "1311", label: "宿舍用电器",
}, { value: "1312", label: "数码用品", }, { value: "1313", label: "交通工具", },
{ value: "1314", label: "二手服装", }, { value: "1315", label: "食品药品", }, {
value: "1316", label: "其他" } ], }, { label: "卖", value: '132', children: [ {
value: '1321', label: "宿舍用电器", }, { value: '1322', label: "数码用品", }, {
value: '1323', label: "交通工具", }, { value: '1324', label: "二手服装", }, {
value: '1325', label: "食品药品", }, { value: '1326', label: "其他" } ], } ], }]
}, { value: '2', label: '找人', children: [{ value: '21', label: '课程组队',
children: [ { label: "找组", value: '211', children: [ { value: '2111', label:
"理学部", }, { value: '2112', label: "经管学部", }, { value: '2113', label:
"人文学部", }, { value: '2114', label: "其他" } ], }, { label: "找组员", value:
'212', children: [ { value: '2121', label: "理学部", }, { value: '2122', label:
"经管学部", }, { value: '2123', label: "人文学部", }, { value: '2124', label:
"其他" } ], } ], }, { value: '22', label: '活动约人', children: [ { label:
"找人", value: "221", children: [ { value: "2211", label: "桌游", }, { value:
"2212", label: "开黑", }, { value: "2213", label: "参观展览", }, { value:
"2214", label: "其他" } ], }, { label: "找局", value: "222", children: [ {
value: "2221", label: "桌游", }, { value: "2222", label: "开黑", }, { value:
"2223", label: "参观展览", }, { value: "2224", label: "其他" } ], } ], }, {
value: '23', label: '寻找伴侣', children: [ { label: '♂', value: "231", }, {
value: "232", label: '♀' } ] }, { value: '24', label: '招聘专区', children: [ {
label: '找活', value: "241", children: [ { value: "2411", label: '科研', }, {
value: "2412", label: '学工', }, { value: "2413", label: '实习', }, ] }, {
label: '招人', value: "242", children: [ { value: "2421", label: '科研', }, {
value: "2422", label: '学工', }, { value: "2423", label: '实习', }, ] } ], }] },
{ value: '3', label: '知事', children: [{ value: '31', label: '课程攻略',
children: [ { value: '311', label: '理学部', }, { value: '312', label:
'经管学部', }, { value: '313', label: '人文学部', } ], }, { value: '32', label:
'生涯指北', children: [ { label: '求职', value: '321', children: [ { value:
'3211', label: '信息科学技术学院', }, { value: '3212', label: '光华管理学院', },
{ value: '3213', label: '元培学院', }, { value: '3214', label: '其他', } ] }, {
label: '留学', value: "322", children: [ { value: "3221", label:
'信息科学技术学院', }, { value: "3222", label: '光华管理学院', }, { value:
"3223", label: '元培学院', }, { value: "3224", label: '其他', } ] }, { label:
'考研', value: '323', children: [ { value: '3231', label: '信息科学技术学院', },
{ value: '3232', label: '光华管理学院', }, { value: '3233', label: '元培学院',
}, { value: '3234', label: '其他', } ] }, { label: '保研', value: '324',
children: [ { value: '3241', label: '信息科学技术学院', }, { value: '3242',
label: '光华管理学院', }, { value: '3243', label: '元培学院', }, { value:
'3244', label: '其他', } ] } ], }, { value: '33', label: '燕园生活', children:
[ { label: '食堂', value: '331', }, { label: '咖啡厅', value: '332', }, { label:
'景点', value: '333', } ] }, { value: '34', label: '吐槽专区', }] }
],
      postTags: '',
      input1 : ref(''),
      input2 : ref(''),
      input3 : ref(''),
      imgList : reactive([]),
      imgFile : reactive([]),
    } 
    

  }
})
</script>

<style scoped>

.el-form {
  margin-top: 2em;
  margin-left: 15%;
  width: 70%;
}

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
    /* height: 11vw;
    margin-left: 5vw;
    margin-right: 5vw; */
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