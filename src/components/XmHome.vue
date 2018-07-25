<template>
  <div class="home">
    <XmHead></XmHead>
    <XmCrumbs></XmCrumbs>
    <XmHMain></XmHMain>
    <XmFoot></XmFoot>
  </div>
</template>
<script>
import XmHead from './common/XmHead.vue'
import XmCrumbs from './common/XmCrumbs.vue'
import XmHMain from './XmHMai.vue'
import XmFoot from './common/XmFoot.vue'
import {getCookieAttr} from '../utils/utils'
export default {
  data () {
    return {

    }
  },
  created () {
    this.loginStatus ()
  },
  methods: {
    loginStatus () {
      /*页面手动更新后，保持VUEX中有数据*/
      let userName = getCookieAttr('userName')
      userName = typeof userName === 'undefined'? '' :userName
      this.$store.commit('RECIEVE_USER_INFO',{userName})
      if (userName) {
        this.$store.dispatch('getCartInfo')
      }
    }
  },
  computed: {},
  components: {
    XmHead,
    XmCrumbs,
    XmHMain,
    XmFoot
  }
}
</script>
<!--scoped再当前作用域用-->
<style scoped>

</style>
