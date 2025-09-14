"use client";

import { RootState } from "@/app/redux-Toolkit/store";
import { useSelector } from "react-redux";
import { Card } from "@/app/reusable-Components/Card";
import { toDoList } from "@/app/common/interfaces/container-1/reduxToolkit";
import styles from "@/app/styles/container_3/page.module.css";

export function MapQuadrati() {
  const toDoListData: toDoList[] = useSelector((state: RootState) => state?.ToDoCards);
  const Items = toDoListData.filter((e) => e.Id !== "");

  return (
    <>
      {Items.map((lastItemArray) => (
        <Card
          height="350px"
          width="220px"
          background_color="#506d96"
          key={lastItemArray.Id}
        >
          <div className={styles.divCard}>
            <p><b>NAME ITEM :</b> {lastItemArray?.nameItem}
            <br />
            <br />
            <b>GIORNI DELLA SETTIMANA : </b>{lastItemArray?.daysOfWeek.join(', ')}
            <br />
            
            <br />
            <b>URGENTE : </b>{lastItemArray?.DefinitelyDoable}</p>
            <div className={styles.InputText}>
                <header>targets</header>
                <br />
              <ol start={1} className={styles.ol}>
                <li>
                  <b><input type="text" /></b>
                </li>
                <br />
               
                <li>
                <b><input type="text" /></b>
                </li>
                 <br />
                <li>
                  <b><input type="text" /></b>
                </li>
              </ol>
            </div>
            <p>ID : {lastItemArray?.Id}</p>
          </div>
        </Card>
      ))}
    </>
  );
}
