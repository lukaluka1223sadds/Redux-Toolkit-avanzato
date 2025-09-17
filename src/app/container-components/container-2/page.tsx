"use client"

import { useState } from "react";
import { CreateTask } from "./utilsCreateTask/CreateTaskPage";
import { DeleteTask } from "./utilsDeleteTask/deleteTaskPage";
import { ButtonsPage } from "./utils/submitButton";

export default function Container_2() {
    const [page , setPage] = useState <string>("Home")

    function getPageComponent() {
        switch (page) {
            case "create":
                return <CreateTask setPage={setPage} />;
            case "delete":
                return <DeleteTask setPage={setPage} />;
            default:
                return <ButtonsPage setPage={setPage} />;
        }
    }

    return(
      <div>
        {getPageComponent()}
      </div>
    )
}
