import * as types from "./actiontype";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: types.REQ_GET_DATA, payload: [] });
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    )
    .then((res) => {
    //   console.log(res.data.data);
      dispatch({ type: types.SUCC_GET_DATA, payload: res.data.data });
    })
    .catch((er) => {
      dispatch({ type: types.FAIL_GET_DATA, payload: [] });
    });
};

// export const filterSearch = (search) => (dispatch) => {
//   axios
//     .get(
//       `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${search}`
//     )
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((er) => {
//       console.log(er);
//     });
// };
