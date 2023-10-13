import { createSlice } from "@reduxjs/toolkit";

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    name: "",
    email: "",
    loading: false,
    error: null,
  },
});
export default userDetail.reducer;
