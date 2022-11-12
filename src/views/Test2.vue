<template>
  <div>
    <p>Test2 组件</p>
    <p>通过mutations 操作数据方式1 、以及携带参数方式</p>
    <p>vuex count值为：{{ $store.state.count }}</p>
    <button @click="reduce">count--</button>
   <p>
    <button @click="addN">count+N</button>
   </p>
  </div>
</template>

<script>
export default {
  name: 'Vue2VuexStudyTest1',

  data() {
    return {}
  },

  methods: {
    reduce() {
      // 触发 vuex 中 mutations 的第一种方式
      this.$store.commit('add')
    },
    addN() {
      // 触发 vuex 中 mutations 的第一种方式 并携带参数
      this.$store.commit('addN', 10)
    }
  }
}
</script>

<style lang="scss" scoped></style>
