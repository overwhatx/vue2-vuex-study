<template>
  <div>
    <p>Test5 组件</p>
    <p>getter 加工store数据的两种方式 getters & mapGetters</p>
    <p>vuex count值为：{{ count }}</p>
    <p>{{ $store.getters.handleCount }}</p>
    <p>{{ handleCount2 }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Vue2VuexStudyTest4',
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['handleCount2'])
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
