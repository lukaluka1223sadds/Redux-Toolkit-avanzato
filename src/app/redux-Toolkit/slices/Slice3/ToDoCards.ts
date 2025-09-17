import { toDoList } from "@/app/common/interfaces/container-1/reduxToolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:toDoList[] = []

const ToDoCards = createSlice({
    name:"ToDoCards",
    initialState,
    reducers:{
        addCase(state,action:PayloadAction<toDoList>){
            if (state.length < 5) {
                state.push(action.payload);
            } else {
                alert("array of tasks is full !!!");
            }
        },
        RemoveCase(state,action:PayloadAction<string>){
              return state.filter(item => item.Id !== action.payload);
        }
    }
})

export const {addCase , RemoveCase} = ToDoCards.actions
export default ToDoCards.reducer