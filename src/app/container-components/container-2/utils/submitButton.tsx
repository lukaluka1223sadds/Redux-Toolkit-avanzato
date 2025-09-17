import SubmitButton from "@/app/reusable-Components/submitButton";
import { Dispatch, SetStateAction } from "react";

export function ButtonsPage({setPage}:{setPage:Dispatch<SetStateAction<string>>}){
    return <div style={{
        height:"100px",
        width:"400px",
        display:"grid",
        gridTemplateColumns:"repeat(2 , 400px)",
    }}>
    <SubmitButton onClickItem={()=>setPage("create")} value={"Add Task"}></SubmitButton>
    <SubmitButton onClickItem={()=>setPage("delete")} value={"Delete Task"}></SubmitButton>
    </div> 
}