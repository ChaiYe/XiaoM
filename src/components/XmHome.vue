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
export default {
  data () {
    return {}
  },
  methods: {},
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
