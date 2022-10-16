<template>
  <router-view v-if="checkLogin()"></router-view>
</template>

<script>
import axios from 'axios';
import user from './stores/user';
export default {
  name: 'helloworld',
  // mounted() {
  //   axios({
  //     method: "get",
  //     url: "/api/test/"
  //   }).then(res => {
  //     this.helloworld = res.data;
  //   })
  // },
  data() {
    return {
      helloworld: "Ajax测试"
    }
  },
  methods: {
    checkLogin() {
      if (this.$route.path == '/')
        return true;
      else if (this.$store.state.token != '0')
        return true;
      else
        alert("请登录！");
      this.$router.replace('/');
    }
  }
}
</script>
