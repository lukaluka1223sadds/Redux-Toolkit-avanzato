"use client";
import { Dispatch, SetStateAction} from "react";

export const UrgentCheckbox = ({ DefinitelyDoable, setDefinitelyDoable }: { DefinitelyDoable: boolean; setDefinitelyDoable: Dispatch<SetStateAction<boolean>> }) => {

  return (
    <div style={{ color: "white" }}>
      Definitely doable
      <input
        type="checkbox"
        checked={DefinitelyDoable}
        onChange={(e) => setDefinitelyDoable(e.target.checked)}
      ></input>
    </div>
  );
}
