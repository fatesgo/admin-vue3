
import { Module } from "vuex";
import tagsViewModuleType from "./interface";
import rootStateType from "@/store/interface";
const tagsViewModule: Module<tagsViewModuleType, rootStateType> = {
  state: {
    visitedViews: new Array,
    cachedViews: new Array,
  },
  mutations: {
    ADD_VISITED_VIEW: (state: any, view: any) => {
      if (state.visitedViews.some((v: any) => v.path === view.path)) return;
      state.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || "no-name"
        })
      );
    },
    ADD_CACHED_VIEW: (state: any, view: any) => {
      const name = getViewName(view)

      if (state.cachedViews.includes(name)) return;
      if (!view.meta.noCache) {
        state.cachedViews.push(name);
      }
    },

    DEL_VISITED_VIEW: (state: any, view: any) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
    },
    DEL_CACHED_VIEW: (state: any, view: any) => {
      const name = getViewName(view)
      const index = state.cachedViews.indexOf(name);
      index > -1 && state.cachedViews.splice(index, 1);
    },

    DEL_OTHERS_VISITED_VIEWS: (state: any, view: any) => {
      state.visitedViews = state.visitedViews.filter((v: any) => {
        return v.meta.affix || v.path === view.path;
      });
    },
    DEL_OTHERS_CACHED_VIEWS: (state: any, view: any) => {
      const name = getViewName(view)
      const index = state.cachedViews.indexOf(name);
      if (index > -1) {
        state.cachedViews = state.cachedViews.slice(index, index + 1);
      } else {
        state.cachedViews = [];
      }
    },

    DEL_ALL_VISITED_VIEWS: (state: any) => {
      const affixTags = state.visitedViews.filter((tag: any) => tag.meta.affix);
      state.visitedViews = affixTags;
    },
    DEL_ALL_CACHED_VIEWS: (state: any) => {
      state.cachedViews = [];
    },

    UPDATE_VISITED_VIEW: (state: any, view: any) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break;
        }
      }
    },

    UPDATE_VISITED_ISREFRESH: (state: any, view: any) => {
      for (let v of state.visitedViews) {
        if (v.name === view.name) {
          v.isRefresh = 1;
        }
      }
    },

    UPDATE_VISITED_TITLE: (state: any, view: any) => {
      for (let v of state.visitedViews) {
        if (v.fullPath === view.view.fullPath) {
          v.title = view.title;
        }
      }
    }
  },
  actions: {
    addView(dispatch: any, view: any) {
      dispatch("addVisitedView", view);
      dispatch("addCachedView", view);
    },
    addVisitedView({commit}, view: any) {
      commit("ADD_VISITED_VIEW", view);
    },
    addCachedView({commit}, view: any) {
      commit("ADD_CACHED_VIEW", view);
    },

    delView(dispatch: any, state: any, view: any) {
      return new Promise(resolve => {
        dispatch("delVisitedView", view);
        dispatch("delCachedView", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        });
      });
    },
    delVisitedView({commit}, state: any, view: any) {
      return new Promise(resolve => {
        commit("DEL_VISITED_VIEW", view);
        resolve([...state.visitedViews]);
      });
    },
    delCachedView({commit}, state: any, view: any) {
      return new Promise(resolve => {
        commit("DEL_CACHED_VIEW", view);
        resolve([...state.cachedViews]);
      });
    },

    delOthersViews({dispatch}, state: any, view: any) {
      return new Promise(resolve => {
        dispatch("delOthersVisitedViews", view);
        dispatch("delOthersCachedViews", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        });
      });
    },
    delOthersVisitedViews({commit}, state: any, view: any) {
      return new Promise(resolve => {
        commit("DEL_OTHERS_VISITED_VIEWS", view);
        resolve([...state.visitedViews]);
      });
    },
    delOthersCachedViews({commit}, state: any, view: any) {
      return new Promise(resolve => {
        commit("DEL_OTHERS_CACHED_VIEWS", view);
        resolve([...state.cachedViews]);
      });
    },

    delAllViews(dispatch: any, state: any, view: any) {
      return new Promise(resolve => {
        dispatch("delAllVisitedViews", view);
        dispatch("delAllCachedViews", view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        });
      });
    },
    delAllVisitedViews({commit}, state: any) {
      return new Promise(resolve => {
        commit("DEL_ALL_VISITED_VIEWS");
        resolve([...state.visitedViews]);
      });
    },
    delAllCachedViews({commit}, state: any) {
      return new Promise(resolve => {
        commit("DEL_ALL_CACHED_VIEWS");
        resolve([...state.cachedViews]);
      });
    },

    updateVisitedView({commit}, view: any) {
      commit("UPDATE_VISITED_VIEW", view);
    },

    updateVisitedIsRefesh({commit}, view: any) {
      commit("UPDATE_VISITED_ISREFRESH", view);
    },

    updateVisitedTitle({commit}, view: any) {
      commit("UPDATE_VISITED_TITLE", view);
    }

  }
};
export default tagsViewModule;
/**
 * 根据路由获取当前view的组件名
 * @param {Object} view $route
 */
function getViewName(view: any) {
  const { matched } = view;

  const { name } = matched[matched.length - 1].components.default;

  return name;
}
















