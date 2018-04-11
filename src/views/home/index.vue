<template>
  <div class="home">
    <div class="father">
      <article>article</article>
      <nav>nav</nav>
      <aside>aside</aside>
    </div>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.home{
  background:lightblue;
}
.father{
  min-height: 800px;
   margin: 0px;
   padding: 0px;
   display: flex;
   background:#aaa;
   justify-content: space-between;
}
.father article{
  width:20%;
  height: 100px;
  background:lightblue;
}
.father nav{
  width:20%;
  height: 100px;
  background:yellowgreen;
}
.father aside{
  width:20%;
  height: 100px;
  background:palevioletred;
}
</style>
