import { AppDispatch } from "@/app/redux-Toolkit/store";
import { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction } from "react";
import { toDoList } from "../container-1/reduxToolkit";

export interface ICreateItems {
    currentType: string,
    checkedBox: string[],
    DefinitelyDoable: boolean,
    setCurrentType: Dispatch<SetStateAction<string>>,
    dispatch: AppDispatch,
    checkToDoList: AsyncThunk<unknown, toDoList, AsyncThunkConfig>
}