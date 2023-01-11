//rxslice command
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoggedIn: false,
email:null,
userName:null,
userID:null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Active_User: (state,action) => {
        console.log(action.payload);
        const { email, userName, userID } = action.payload;
        state.isLoggedIn = true;
        state.email = email;
        state.userName = userName;
        state.userID=userID
        console.log(userID)
    },
    Remove_Active_User: (state,action) => {
      console.log(action.payload);
      // const {email,userName,userId} = action.payload;
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userId=null
  }

  }
});

export const {Active_User,Remove_Active_User} = authSlice.actions
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectImg = (state) => state.auth.img;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer