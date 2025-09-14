"use client"

import { Dispatch, SetStateAction } from "react";

export default function MapCheckbox(setCheckedBox:Dispatch<SetStateAction<string[]>>) {
  const daysOfTheWeek = [
    "lunedi",
    "martedi",
    "mercoledi",
    "giovedi",
    "venerdi",
    "sabato",
    "domenica",
  ];

  return (
    <>
      {daysOfTheWeek.map((day, index) => (
        <div key={index}>
          <input type="checkbox" name={day} onClick={()=>setCheckedBox(
            prev => {
               if (prev.includes(day)){
                 return prev.filter((d) => d !== day )
               }else{
                 return [...prev, day];
               }
            }
          )}/>
          {day}
        </div>
      ))}
    </>
  );
}
