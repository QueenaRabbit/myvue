import * as types from './types'
export default {
  [types.SHOW_NAV]:(state)=>{
    state.bNav=true;
  },
  [types.HIDE_NAV]:(state)=>{
    state.bNav=false;
  },
  [types.SHOW_FOOT]:(state)=>{
    state.bFoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.bFoot=false;
  },
  [types.SHOW_LOADING]:(state)=>{
    state.bLoading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bLoading=false;
  },
  [types.ADD_ITEM]:(state,payload)=>{
    state.buycar=payload;  //
  },
  [types.CHANGE_ITEM]:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state)=>{
    state.buycar=[];
  },
}
