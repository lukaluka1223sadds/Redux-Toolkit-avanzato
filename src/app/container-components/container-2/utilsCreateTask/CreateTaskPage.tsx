"use client";

import styles from "@/app/styles/container_2/page.module.css";
import {DaysOfWeek} from "./daysOfWeek";
import { Dispatch, SetStateAction, useState } from "react";
import { checkToDoList } from "@/app/redux-Toolkit/slices/Slice2/ToDoList";
import { AppDispatch } from "@/app/redux-Toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux-Toolkit/store";
import { createItem } from "./handleCreateItem";
import SubmitButton from "@/app/reusable-Components/submitButton";
import {UrgentCheckbox} from "./urgentCheckbox";
import { setNullArray } from "@/app/redux-Toolkit/slices/Slice4/daysOfWeek";


export function CreateTask({ setPage }: { setPage: Dispatch<SetStateAction<string>> }){
  const [currentType, setCurrentType] = useState<string>("");
  const [DefinitelyDoable, setDefinitelyDoable] = useState(false);
  const [cardNumber ,setCardNumber] = useState <number>(0)
  const dispatch = useDispatch<AppDispatch>();
  const daysOfWeek = useSelector((state: RootState) => state.daysOfWeek);


  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleCreateItemCall() {
    createItem({
      currentType,
      daysOfWeek: daysOfWeek[cardNumber] || [],
      DefinitelyDoable,
      setCurrentType,
      dispatch,
      checkToDoList,
    });
    setCardNumber(cardNumber + 1)
    {DefinitelyDoable && setDefinitelyDoable(false) }
    dispatch(setNullArray(cardNumber))
  }

  return (
    <div className={styles.Container_2Div}>
        <b onClick={()=>setPage("Home")} style={{color:"white"}}><h2>return</h2></b>
      <h1 style={{float:"inline-end" , marginRight:"20px"}}>TO DO LIST</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={styles.input}
          onChange={(event) => setCurrentType(event.target.value)}
          value={currentType}
          placeholder="input list item"
          required
        />
        
        <div className={styles.checkboxDiv}>{DaysOfWeek(cardNumber, setDefinitelyDoable)}</div>

        <UrgentCheckbox DefinitelyDoable={DefinitelyDoable} setDefinitelyDoable={setDefinitelyDoable}></UrgentCheckbox>

        <SubmitButton
          onClickItem={handleCreateItemCall}
          value="end"
        ></SubmitButton>
      </form>
    </div>
  );
}