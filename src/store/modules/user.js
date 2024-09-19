import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    getToken(state, action) {
      state.token = action.payload;
    },
  },
});

const { getToken } = userStore.actions;
const userReducer = userStore.reducer;
export default userReducer;
export { getToken };
