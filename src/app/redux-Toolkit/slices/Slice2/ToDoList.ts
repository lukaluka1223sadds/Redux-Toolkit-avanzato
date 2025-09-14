import { toDoList } from "@/app/common/interfaces/container-1/reduxToolkit";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCase } from "../Slice3/ToDoCards";

export const checkToDoList = createAsyncThunk("/api/checkToDoList" , async (props:toDoList, thunkAPI)=> {
   const params = new URLSearchParams({
      nameItem: props.nameItem,
      daysOfWeek: JSON.stringify(props.daysOfWeek),
      DefinitelyDoable: props.DefinitelyDoable.toString()
    })

     const response = await fetch(`/api/checkToDoList?${params}`,{
         method:"GET",
         headers:{
            "Content-Type":"application/json"
         }
     })

     if(!response.ok){
        throw new Error("error in call fetch")
     }

     const result = await response.json();
     thunkAPI.dispatch(addCase(result));
     return result;
}
)

const initialState:toDoList = {
    nameItem: "",
    daysOfWeek:[],
    DefinitelyDoable: false,
    Id:""
}

const ToDoList = createSlice({
    name:"toDoList",
    initialState,
    reducers:{},
    extraReducers(Builder){
        Builder.addCase(checkToDoList.fulfilled , (state , action : PayloadAction<toDoList>)=>{
               state.DefinitelyDoable = action.payload.DefinitelyDoable
               state.Id = action.payload.Id as string
               state.daysOfWeek = action.payload.daysOfWeek
               state.nameItem = action.payload.nameItem
        })
    }
})

export default ToDoList.reducer