import * as types from "./actiontype"


const init = {
  data: [],
  dataNames:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = init, action) => {
  const {payload, type} = action;
  switch (type) {

    case types.REQ_GET_DATA :{return {...state,isLoading:true,isError:false, data:[]}}
    case types.SUCC_GET_DATA : {
        // console.log(payload)
        return {...state,isLoading:false,isError:false,data:payload}
    }


case types.REQ_SEARCH_DATA :{return {...state,isLoading:true,isError:false, dataNames:[]}}
case types.SUCC_SEARCH_DATA :{return {...state,isLoading:false,isError:false, dataNames:payload}}
case types.FAIL_SEARCH_DATA : {return {...state,isLoading:false,isError:true, dataNames:[]}}


    default: return state;
  }
};
