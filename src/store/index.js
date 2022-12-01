import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// 模块
const moduleA = {
  state: {
    name: '小八嘎',
    age: 18
  },
  mutations: {
    agePlus(state) {
      state.age++
    }
  },
  getters: {
    handelName(state) {
      return `无情的${state.name}`
    }
  },
  actions: {
    getList2() {
      axios.get('/list.json').then(({ data }) => {
        console.log(2, data)
      })
    }
  }
}

// 主结构
export default new Vuex.Store({
  // state 储存公共数据
  state: {
    count: 0,
    name: '张三',
    // -----------
    // 所有的任务列表
    list: [],
    inputValue: '',
    inputValueId: '',
    // 展示内容 0全部 1已完成 2未完成
    viewList: 0
  },

  // mutations 修改 $store 中的数据
  mutations: {
    agePlus(state) {
      state.count++
    },
    add(state) {
      state.count++
    },
    reduce(state) {
      state.count--
    },
    addN(state, setup) {
      state.count += setup
    },
    // 定时器 异步操作
    // reduceN(state, setup) {
    //   setTimeout(() => {
    //     state.count -= setup
    //   }, 1000)
    // }
    reduceN(state, setup) {
      state.count -= setup
    },

    // --------------------------------
    // 接收 actions获取到的list 数据
    initList(state, list) {
      state.list = list
      state.inputValueId = list.length
    },
    //修改value值
    setInputValue(state, list) {
      state.inputValue = list
    },

    // 添加列表项
    addItem(state) {
      console.log(state.inputValueId)
      const obj = {
        id: state.inputValueId++,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.inputValue = ''
    },

    // 删除
    removeItem(state, id) {
      console.log(id)
      const i = state.list.findIndex((item) => item.id == id)
      console.log(i)
      if (i !== -1) {
        state.list.splice(i, 1)
      }
    },

    // 修改状态
    UpdateItem(state, param) {
      console.log(state)
      console.log(param.id, param.status)
      const i = state.list.findIndex((x) => x.id == param.id)
      if (i !== -1) {
        state.list[i].done = param.status
      }
    },

    // 清除以完成
    clearDone(state) {
      // 将不为false重新赋值
      state.list = state.list.filter((x) => x.done === false)
    },

    // 显示内容
    changeViewList(state, key) {
      state.viewList = key
    }
  },

  // actions 处理异步操作
  actions: {
    reduceNSync(context, setup) {
      setTimeout(() => {
        //通过 commit 去触发 mutations 中的函数
        context.commit('reduceN', setup)
      }, 1000)
    },

    // --------------------------------
    // 1.触发发送异步请求
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        console.log(data)
        // 2.将获取的数据传入到 mutations
        context.commit('initList', data)
      })
    }
  },

  // 将数据进行包装
  getters: {
    handleCount(state) {
      let abc = state.count * 2
      return `count加工后的数据*2：${abc}`
    },
    handleCount2(state) {
      let abc = state.count * 4
      return `count加工后的数据*4：${abc}`
    },
    // --------------------------------

    // 统计未完成的条数
    listNumber(state) {
      return state.list.filter((x) => x.done === false).length
    },

    // tab 切换 展示不同数据
    infoList(state) {
      if (state.viewList === 0) return state.list
      // 未完成
      if (state.viewList === 1) {
        return state.list.filter((x) => !x.done)
      }
      // 已完成
      if (state.viewList === 2) {
        return state.list.filter((x) => x.done)
      }
      return state.list
    }
  },

  // modules 模块 vuex私有化 去臃肿
  modules: {
    // 导入模块
    moduleA
  }
})
