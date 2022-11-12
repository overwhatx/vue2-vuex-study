<template>
  <div>
    <p>Test3 组件</p>
    <p>
      访问store数据方式2 mapState 、通过mutations 操作数据方式2 mapMutations
    </p>
    <p>vuex count值为：{{ count }}</p>
    <button @click="btnAddN">count+N</button>
    <button @click="btnAdd">count++</button>
    <p>name:{{ name }}</p>
  </div>
</template>

<script>
// 组件访问 vuex 中state 数据的第二种方式 mapState
// 触发mutaions 的第二种方式 mapMutations
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Vue2VuexStudyTest3',

  data() {
    return {}
  },

  // 通过导入的mapState函数 将当前组件需要的全局数据，映射为当前组件的computed计算属性
  computed: {
    // 将全局数据映射为当前组件的计算属性
    ...mapState(['count', 'name'])
  },
  methods: {
    // 将指定的mutations函数 映射为当前组件的 methods函数
    ...mapMutations(['add', 'addN']),
    btnAddN() {
      this.addN(10)
    },
    btnAdd() {
      this.add()
    }
  }
}
</script>

<style lang="scss" scoped></style>
