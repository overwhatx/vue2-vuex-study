<template>
  <div>
    <p>Test1 组件</p>
    <p>访问store数据方式1 、不规范的直接操作store数据</p>
    <p>vuex count值为：{{ $store.state.count }}</p>
    <!-- 如下实现 count数据加加 这是一种不推荐的方式 -->
    <!-- 不允许其他组件直接修改 vuex 中的 state数据 应该使用 mutations-->
    <button @click="$store.state.count++">count++</button>
  </div>
</template>

<script>
export default {
  name: 'Vue2VuexStudyTest1',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
