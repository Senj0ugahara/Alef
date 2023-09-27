import { createStore } from 'vuex'

export default createStore({
  state: {
    parentInfo: null,
    childInfo: [],
    dialogVisible: false
  },
  getters: {
    getChilds(state) {
      return state.childInfo;
    },
    getParent(state) {
      return state.parentInfo;
    }
  },
  mutations: {
    submitChild(state, child) {
      if (state.childInfo.length < 5) {
        state.childInfo.push(child);
      }
    },
    removeChild(state, index) {
      state.childInfo.splice(index, 1);
    },
    submitParent(state, parent) {
      state.parentInfo = parent;
    }
  },
  actions: {
    submitChild({ commit }, child) {
      const childs = {
        name: child.name,
        age: child.age
      };
      commit('submitChild', childs);
    },
    removeChild({ commit }, index) {
      commit('removeChild', index);
    },
    submitParent({ commit }, parent) {
      const parents = {
        name: parent.name,
        age: parent.age
      };
      commit('submitParent', parents);
    }
  },
  modules: {
  }
})
