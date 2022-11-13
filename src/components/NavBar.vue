<template>
    <div class="bar">
        <img alt="logo" src="../assets/images/logo.png" class="nav-bar-logo" @click="goto('/home')" />
        <el-row :gutter="20">
            <el-col span="6">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        Delta<el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="goto('/home')">首页</el-dropdown-item>
                            <el-dropdown-item @click="goto('/about')">关于我们</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
            <el-col span="6">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        淘物<el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="goto('/list')">课程资料</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">书籍专区</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">日用物品</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
            <el-col span="6">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        找人<el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="goto('/list')">课程组队</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">活动约人</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">寻找伴侣</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">招聘信息</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
            <el-col span="6">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        知事<el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="goto('/list')">课程攻略</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">生涯攻略</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">燕园生活</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list')">吐槽专区</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-input v-model="keyword.keyword" size="large" class="w-50 m-2" placeholder="全站搜索" @keyup.enter="search()">
            <template #prefix>
                <el-icon class="el-input__icon">
                    <search />
                </el-icon>
            </template>
        </el-input>
        <div class="profile">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <div>{{ username }}</div>
                    <img alt="profile" :src=profile @click="goto('/user')" />
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="goto('/user')">个人信息</el-dropdown-item>
                        <el-dropdown-item @click="goto('/user')">发布历史</el-dropdown-item>
                        <el-dropdown-item @click="goto('/user')">聊天列表</el-dropdown-item>
                        <el-dropdown-item @click="logout()">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>


<script>
import { ElRow, ElCol, ElDropdown, ElDropdownMenu, ElDropdownItem, ElIcon, ElInput } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import { mapMutations } from 'vuex';
import user from '../stores/user';
import '../../node_modules/element-plus/theme-chalk/index.css'
export default defineComponent({
    components: {
        ElRow,
        ElCol,
        ElDropdown,
        ElDropdownMenu,
        ElDropdownItem,
        ElIcon,
        ElInput,
    },
    methods: {
        ...mapMutations(["setEmail", "setUsername", "setToken", "setProfile"]),
        goto(router) {
            this.$router.replace(router);
        },
        search() {
            console.log(this.keyword.keyword);
            this.$router.replace('/list');
        },
        logout() {
            localStorage.removeItem("Flag");
            axios({
                method: "post",
                url: "/api/logout/",
                data: {
                    logout: true,
                },
            });
            this.$router.replace('/');
        }
    }
})
</script>

<script setup>
const keyword = reactive({
    keyword: '',
})
const username = localStorage.getItem("Username");
const profile = localStorage.getItem("Profile");
</script>


<style scoped>
.bar {
    height: 100%;
    width: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nav-bar-logo {
    height: 50%;
    margin: 1rem;
    margin-right: 2rem;
}

.el-row {
    margin-top: 0.5rem;
}

.el-input {
    width: 40%;
    margin-left: 3rem;
}

.profile {
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
}

.profile .el-dropdown span img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
}

.profile .el-dropdown span div {
    margin: 1rem;
    font-size: larger;
}

.profile .el-dropdown {
    height: 100%;
}

.profile .el-dropdown span {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>