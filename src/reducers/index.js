import { createReducer, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

let initialState = {
  records: [],
  isLoading: true,
  isError: false
};
//readux toolkit createSice type = 'app/isLoading'
const createAppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLoadingApi(state, action) {
      state.isLoading = true;
    },
    loadData(state, action) {  
      state.isLoading = false;
      state.records = action.payload;
    },
     isError(state, action) {  
      state.isLoading = false;
      state.isError = action.payload;
    }
  }
});
export const { loadData, isLoadingApi, isError } = createAppSlice.actions;
export default  combineReducers({
  global: createAppSlice.reducer
})
