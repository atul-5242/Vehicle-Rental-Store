import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  ishover:false,
  singleUserData:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setIshover(state, value) {
      state.ishover = value.payload;
    },
    setAdditionalDetails(state, value) {
      state.additionalDetails = value.payload;
    },
    setSingleUserData(state,value){
      state.singleUserData = value.payload;
    }
  },
});

export const { setSignupData,setIshover,setSingleUserData, setLoading, setToken,setAdditionalDetails } = authSlice.actions;

export default authSlice.reducer;