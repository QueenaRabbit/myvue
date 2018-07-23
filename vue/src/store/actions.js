import * as types from './types'
export default {
  showNav:({commit,state},payload)=>{
    // console.log(payload,state);
    commit(types.SHOW_NAV)
  },
  hideNav:({commit,state},payload)=>{
    // console.log('actions.....');
    // console.log(state);
    // state.bNav=false;
    commit(types.HIDE_NAV)
  },
  showFoot:({commit,state},payload)=>{
    commit(types.SHOW_FOOT)
  },
  hideFoot:({commit,state},payload)=>{
    commit(types.HIDE_FOOT)
  },
  showLoading:({commit,state},payload)=>{
    commit(types.SHOW_LOADING)
  },
  hideLoading:({commit,state},payload)=>{
    commit(types.HIDE_LOADING)
  },
  addItem:({commit,state},payload)=>{ // state是复制的一份，修改不影响真实state
    //判断购物车是否存在当前项目，存在number+1，不存在，添加一项
    // console.log(state);
    let find=false;
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        item.number++;//数量递增
        find=true;
      }
    });
    if(!find) {
      payload.number=1;//数量
      state.buycar.push(payload);
    }
    commit(types.ADD_ITEM,[...state.buycar])
  },
  changeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit(types.CHANGE_ITEM,[...state.buycar])
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
  },
  clearBuycar:({commit,state})=>{
    commit(types.CLEAR_BUYCAR);
  }
}
