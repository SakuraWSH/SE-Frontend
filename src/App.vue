<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'
export default {
  name: 'helloworld',
  mounted() {
    axios({
      method: "get",
      url: "/api/test/"
    }).then(res => {
      this.helloworld = res.data;
    })
  },
  data() {
    return {
      helloworld: "Ajax测试"
    }
  },
}
</script>
