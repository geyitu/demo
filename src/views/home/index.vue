<template>
  <div class="home">
    <!--<div class="father">
      <article>article</article>
      <nav>nav</nav>
      <aside>aside</aside>
    </div>
    <footer>footer</footer>-->
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    <group>
      <x-button @click.native="doShowToast" :gradients="['#1D62F0', '#19D5FD']">{{buttonMessage}}</x-button>
    </group>
    <div>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button @click.native="doShowToast" type="primary">show toast</x-button>
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { XButton, Actionsheet, XDialog, XHeader, TransferDom, Group } from 'vux'
export default {
  directives: {
    TransferDom
  },
  // name: 'auth',
  data () {
    return {
      showToast: false,
      buttonMessage: '点我',
      showMenus: false,
      menus: {
        menu1: '拍照',
        menu2: '从相册选择'
      }
    }
  },
  components: {
    XButton,
    XDialog,
    XHeader,
    Actionsheet,
    Group
  },
  methods: {
    doShowToast () {
      this.showToast = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close';
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
/*.home{
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
}*/

</style>
