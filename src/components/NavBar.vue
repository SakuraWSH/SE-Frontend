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
                            <el-dropdown-item @click="goto('/list?tags=11')">课程资料</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=12')">书籍专区</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=13')">日用物品</el-dropdown-item>
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
                            <el-dropdown-item @click="goto('/list?tags=21')">课程组队</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=22')">活动约人</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=23')">寻找伴侣</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=24')">招聘信息</el-dropdown-item>
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
                            <el-dropdown-item @click="goto('/list?tags=31')">课程攻略</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=32')">生涯攻略</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=33')">燕园生活</el-dropdown-item>
                            <el-dropdown-item @click="goto('/list?tags=34')">吐槽专区</el-dropdown-item>
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
                    <img alt="profile" src="/src/assets/images/default_profile.png" @click="goto('/user')" />
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="goto('/user?tab=info')">个人信息</el-dropdown-item>
                        <el-dropdown-item @click="goto('/user?tab=posts')">发布历史</el-dropdown-item>
                        <el-dropdown-item @click="goto('/user?tab=messages')">聊天列表</el-dropdown-item>
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
import axios from 'axios';
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
    data() {
        return {
            keyword: reactive({
                keyword: '',
            }),
            username: localStorage.getItem("Username"),
            // profile: localStorage.getItem("Profile"),
            // profile: "/src/assets/images/default_profile.png",
        }
    },
    methods: {
        ...mapMutations(["setEmail", "setUsername", "setToken", "setProfile"]),
        goto(router) {
            this.$router.push(router);
        },
        search() {
            console.log(this.keyword.keyword);
            this.$router.replace('/list?key=' + this.keyword.keyword);
        },
        logout() {
            axios({
                method: "post",
                url: "/api/logout/",
                data: {
                    logout: true,
                },
            }).then(response => {
                if (response.data.logout_code == 1) {
                    localStorage.removeItem("Flag");
                    this.$router.replace('/');
                } else {
                    console.log(response.data.logout_code);
                    this.$message.error("登出失败！");
                }
            });
        }
    }
})
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