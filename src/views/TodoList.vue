<template>
  <div id="app">
    <a-input
      placeholder="请输入任务"
      class="my_ipt"
      :value="inputValue"
      @change="handleInputChange"
    />
    <a-button type="primary" @click="addItemTolist">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <!-- 
           @change="
            (e) => {
              handelChecked(e)
            }
          "
         -->
        <a-checkbox
          :checked="item.done"
          @change="handelChecked(item.id, $event)"
        >
          {{ item.info }}
        </a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemID(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>{{ listNumber }}条剩余</span>
        <a-button-group>
          <a-button
            :type="viewList === 0 ? 'primary' : 'default'"
            @click="handelTab(0)"
          >
            全部
          </a-button>
          <a-button
            :type="viewList === 1 ? 'primary' : 'default'"
            @click="handelTab(1)"
            >未完成</a-button
          >
          <a-button
            :type="viewList === 2 ? 'primary' : 'default'"
            @click="handelTab(2)"
            >已完成</a-button
          >
        </a-button-group>
        <a @click="clearDone">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    // 将组件中所需要的数据 从 state中映射为当前组件的计算属性
    ...mapState(['inputValue', 'viewList']),
    ...mapGetters(['listNumber', 'infoList'])
  },
  mounted() {},
  methods: {
    // 监听数据改变
    handleInputChange(e) {
      console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    },

    // 添加
    addItemTolist() {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('请输入后再进行添加')
      }
      this.$store.commit('addItem')
    },
    // 删除
    removeItemID(id) {
      console.log(id)
      this.$store.commit('removeItem', id)
    },

    // 切换状态
    handelChecked(id, item) {
      let param = {
        id: id,
        status: item.target.checked
      }
      this.$store.commit('UpdateItem', param)
    },

    // 清除已完成
    clearDone() {
      this.$store.commit('clearDone')
    },
    // tab切换
    handelTab(value) {
      this.$store.commit('changeViewList', value)
    }
  }
}
</script>
<style scoped>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
