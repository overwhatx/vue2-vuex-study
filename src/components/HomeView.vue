<template>
  <div class="home">
    <Test7 />
    <hr />
    <Test1 />
    <hr />
    <Test2 />
    <hr />
    <Test3 />
    <hr />
    <Test4 />
    <hr />
    <Test5 />
    <hr />
    <Test6 />
  </div>
</template>

<script>
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
import Test3 from '../views/Test3.vue'
import Test4 from '../views/Test4.vue'
import Test5 from '../views/Test5.vue'
import Test6 from '../views/Test6.vue'
import Test7 from '../views/TodoList.vue'
export default {
  name: 'Vue2VuexStudyHomeView',

  data() {
    return {}
  },
  components: {
    // es6简写形式 key==value
    Test1,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6,
    Test7
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
}
</style>
