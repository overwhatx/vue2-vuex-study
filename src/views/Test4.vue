<template>
  <div>
    <p>Test4 组件</p>
    <p>异步方式 对数据进行更改 两种方式 dispatch & mapActions</p>
    <p>vuex count值为：{{ count }}</p>
    <button @click="btnReduceN">AsyncCount-N</button>
    <button @click="btnReduceN2">AsyncCount-100</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Vue2VuexStudyTest4',

  data() {
    return {}
  },

  // 通过导入的mapState函数 将当前组件需要的全局数据，映射为当前组件的computed计算属性
  computed: {
    // 将全局数据映射为当前组件的计算属性
    ...mapState(['count'])
  },

  mounted() {},

  methods: {
    ...mapActions(['reduceNSync']),

    btnReduceN() {
      this.$store.dispatch('reduceNSync', 10)
    },
    btnReduceN2() {
      this.reduceNSync(100)
    }
  }
}
</script>

<style lang="scss" scoped></style>
