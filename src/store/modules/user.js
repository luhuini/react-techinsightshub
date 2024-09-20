import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
const userStore = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token_key") || "",
  },
  reducers: {
    getToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token_key", action.payload);
    },
  },
});

const { getToken } = userStore.actions;

const fetchToken = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    console.log(res, "res");

    dispatch(getToken(res.data.token));
  };
};

const userReducer = userStore.reducer;
export default userReducer;
export { getToken, fetchToken };
