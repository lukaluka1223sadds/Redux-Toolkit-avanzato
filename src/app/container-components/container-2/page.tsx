"use client";

import styles from "@/app/styles/container_2/page.module.css";
import MapCheckbox from "./utils/mapCheckbox";
import { useState } from "react";
import { checkToDoList } from "@/app/redux-Toolkit/slices/Slice2/ToDoList";
import { AppDispatch } from "@/app/redux-Toolkit/store";
import { useDispatch } from "react-redux";
import { createItem } from "./utils/handleCreateItem";
import SubmitButton from "@/app/reusable-Components/submitButton";

export default function Container_2() {
  const [currentType, setCurrentType] = useState<string>("");
  const [DefinitelyDoable, setDefinitelyDoable] = useState(false);
  const [checkedBox, setCheckedBox] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function  handleCreateItemCall(){
      createItem({ currentType, checkedBox, DefinitelyDoable, setCurrentType, dispatch, checkToDoList })
  }

  return (
    <div className={styles.Container_2Div}>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={styles.input}
          onChange={(event) => setCurrentType(event.target.value)}
          value={currentType}
          placeholder="input list item"
        />
        <div className={styles.checkboxDiv}>
          {MapCheckbox(setCheckedBox)}
        </div>
        <div style={{ color: "white" }}>
          Definitely doable
          <input
            type="checkbox"
            onClick={() =>
              setDefinitelyDoable((DefinitelyDoable) => !DefinitelyDoable)
            }
          ></input>
        </div>
        <SubmitButton onClickItem = {handleCreateItemCall} value="end"></SubmitButton>
      </form>
    </div>
  );
}
