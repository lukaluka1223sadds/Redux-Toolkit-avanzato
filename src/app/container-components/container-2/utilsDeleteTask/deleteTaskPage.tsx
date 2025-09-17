import { Dispatch, SetStateAction, useState } from "react";
import styles from "@/app/styles/container_2/page.module.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux-Toolkit/store";
import SubmitButton from "@/app/reusable-Components/submitButton";
import { RemoveCase } from "@/app/redux-Toolkit/slices/Slice3/ToDoCards";
import { delerteDay } from "@/app/redux-Toolkit/slices/Slice4/daysOfWeek";
export function DeleteTask({ setPage }: { setPage: Dispatch<SetStateAction<string>> }){
    const arrayOfTasks = useSelector((state:RootState)=>state.ToDoCards)
    const Dispatch = useDispatch()
    const [input , setInput]=useState<string>("")
    
    function searchDeleteTask(){
        const findCardIndex =arrayOfTasks.findIndex((e)=> e.Id == input)
        console.log(arrayOfTasks)
        Dispatch(RemoveCase(input))
        console.log(findCardIndex)
        Dispatch(delerteDay(findCardIndex))
    }
    
    return(
        <div className={styles.deletePage}>
            <b onClick={()=>setPage("Home")}  style={{color:"white"}}><h2>return</h2></b>
            <input type="text" onChange={(event)=>setInput(event.target.value)}/>
            <SubmitButton value="delete task" onClickItem={searchDeleteTask}></SubmitButton>
        </div>
    )
}