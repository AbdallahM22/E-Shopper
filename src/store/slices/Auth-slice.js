import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calcExpirationTime, retrieveStoredToken } from '../../authHelper';

let timeOut;

const initialToken = ()=> {
  let token;
  const storedData = retrieveStoredToken();

  if (storedData) {
    token = storedData.token;
  }
  return token;
}

const logoutHandler = (state) => {
  clearTimeout(timeOut);
  state.token = null;
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
};


const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token:  initialToken(),
  },
  reducers: {
    logout: logoutHandler,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.idToken;
      localStorage.setItem("token", action.payload.idToken);
    });
    builder.addCase(login.rejected, (state, action) => {
      alert("Authentication Failed");
    });
    builder.addCase(setTimer.fulfilled, ()=> {
    })
  },
  
});


export const login = createAsyncThunk(
  "authSlice/login",
  async ({ url, body }, thunkAPI) => {

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      
      if (res.ok) {
        return res.json().then((response) => {
          const expirationTime = new Date(
            new Date().getTime() + +response.expiresIn * 1000
          );
          localStorage.setItem("expirationTime", expirationTime);
          const expiredTime = calcExpirationTime(expirationTime);
          
          timeOut = setTimeout(() => {
            thunkAPI.dispatch(logout());
          }, expiredTime);

          return response;
        });
      } else {
        throw new Error("Authentication Failed");
      }
    });
    
    return response;
  }
);
export const setTimer = createAsyncThunk('authSlice/setTimer', async(duration, thunkAPI)=> {

  timeOut = await setTimeout(() => {
    thunkAPI.dispatch(logout());
  }, duration);
})

export const { isLogin, logout } = authSlice.actions;
export default authSlice.reducer;
