"use client"

import { addDay } from "@/app/redux-Toolkit/slices/Slice4/daysOfWeek";
import { RootState } from "@/app/redux-Toolkit/store";
import { useDispatch, useSelector } from "react-redux";

export function DaysOfWeek(cardNumber : number, setDefinitelyDoable: (value: boolean) => void) {
  const dispatch = useDispatch()
  const daysOfWeekState = useSelector((state: RootState) => state.daysOfWeek);
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
      {daysOfTheWeek.map((day, index) => {
       const checked = daysOfWeekState[cardNumber]?.includes(day) || false;
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={day}
              checked={checked}
              onChange={() => {
                dispatch(addDay({ day, cardNumber }));
                setDefinitelyDoable(false);
              }}
            />
            {day}
          </div>
        );
      })}
    </>
  );
}
