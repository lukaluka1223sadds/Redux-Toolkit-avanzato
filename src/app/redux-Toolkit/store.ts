import { configureStore } from "@reduxjs/toolkit";
import AsyncExtraReducers from "./slices/Slice1/asyncextraReducers";
import CheckToDoList from "./slices/Slice2/ToDoList";
import ToDoCards from "./slices/Slice3/ToDoCards";

export const store = configureStore({
  reducer: {
    AsyncExtraReducers: AsyncExtraReducers,
    toDoList: CheckToDoList,
    ToDoCards: ToDoCards
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;