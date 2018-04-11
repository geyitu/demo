<template>
  <div class="auth">
     {{msg}}
  </div>
</template>
<script>
export default {
  name: 'auth',
  data () {
    return {
      msg: '欢迎来到登陆页面 '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auth{
width: 100%;
color:#324157;
font-size:30px;
}
</style>
