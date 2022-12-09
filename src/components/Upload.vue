<template>
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
</template>

<style scoped>
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

<script setup>
const imgList = reactive([]);
</script>

<script>
import { ElCard, ElIcon } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
    components: {
        ElCard,
        ElIcon,
    },
    methods: {
        uploadImage() {
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                this.imgList.push(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
})
</script>