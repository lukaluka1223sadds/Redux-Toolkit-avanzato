import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserData {
  id: number;
  name: string;
  email: string;
}

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId: number): Promise<UserData> => {
    return new Promise((resolve) => setTimeout(() => {
      resolve({
        id: userId,
        name: "Test User",
        email: "test@example.com"
      });
    }, 1000));
  }
);

interface TinitialStateExtraReducers {
  data: string | null;
  error: boolean;
  loading: boolean;
}

const initialState: TinitialStateExtraReducers = {
  data: null,
  error: false,
  loading: false
};

export const AsyncExtraReducers = createSlice({
  name: "asyncExtraReducers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state) => {
        state.data = "hello world";
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.error = true;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      });
  }
});

export default AsyncExtraReducers.reducer;