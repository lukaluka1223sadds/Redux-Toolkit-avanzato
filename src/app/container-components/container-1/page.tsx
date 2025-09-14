"use client"

import { fetchUser } from "@/app/redux-Toolkit/slices/Slice1/asyncextraReducers";
import { AppDispatch, RootState } from "@/app/redux-Toolkit/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/app/styles/container_1/page.module.css";
import Image from "next/image";
import SubmitButton from "@/app/reusable-Components/submitButton";

export const dynamic = 'force-dynamic';

export default function Container_1() {
  const dispatch = useDispatch<AppDispatch>();
  const extraReducersRes = useSelector((state: RootState) => state?.AsyncExtraReducers);

  function handleFetch() {
    dispatch(fetchUser(1));
  }

  return (
    <div className={styles.Container_1_Principal}>
      <Image className={styles.Image} src="/registration1.jpg" height={100} width={100} alt="" />
      <div className={styles.registrationDiv}>
        <SubmitButton onClickItem={handleFetch} value={"Click"}></SubmitButton>
        <p>data: {extraReducersRes.data}</p>
        <p>is error: {extraReducersRes.error ? "Yes" : "No"}</p>
        <p>Loading: {extraReducersRes.loading ? "please loading..." : "Done"}</p>
      </div>
    </div>
  );
}