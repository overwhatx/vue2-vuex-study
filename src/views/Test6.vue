<template>
  <div>
    <p>Test6 组件</p>
    <p>vuex modules 的使用</p>
    <p>获取modules中的数据方式1:{{ $store.state.moduleA.name }}</p>
    <p>获取modules中的数据方式2:{{ moduleA.age }}</p>
    <button @click="add">修改数据++</button>
    <p>获取getters：{{ $store.getters.handelName }}</p>
    <p>获取getters方式2：{{ handelName }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Vue2VuexStudyTest4',
  created() {
    this.$store.dispatch('getList2')
  },
  computed: {
    // 获取数据
    ...mapState(['count', 'moduleA']),
    ...mapGetters(['handelName'])
  },
  methods: {
    // 修改数据
    ...mapMutations(['agePlus']),
    add() {
      // 方式1
      // this.$store.commit('agePlus')
      // 方式2
      this.agePlus()
    }
  }
}
</script>

<style lang="scss" scoped></style>
