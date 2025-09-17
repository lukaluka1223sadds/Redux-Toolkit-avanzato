import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[][] = [[], [], [], [], []];

export const setNullArray = createAsyncThunk("/container-2/utils", async (dayWeekNumber:number) => {
  const response = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(dayWeekNumber);
    }, 1000);
  });
  return response;
});

const daysOfWeek = createSlice({
  name: "daysOfWeek",
  initialState,
  reducers: {
    addDay(state, action: PayloadAction<{day:string , cardNumber:number}>) {
      if (action.payload.day === "null") {
        state[action.payload.cardNumber] = [];
      } else {
        state[action.payload.cardNumber] = state[action.payload.cardNumber].includes(action.payload.day)
          ? state[action.payload.cardNumber].filter((d) => d !== action.payload.day)
          : [...state[action.payload.cardNumber], action.payload.day];
      }
    },
    delerteDay(state, action: PayloadAction<number>) {
  state.splice(action.payload, 1);
}

  },
  extraReducers(build) {
    build.addCase(setNullArray.fulfilled, (state, action) => {
      state[action.payload] = [];
    });
  },
});

export const { addDay , delerteDay } = daysOfWeek.actions;
export default daysOfWeek.reducer;
