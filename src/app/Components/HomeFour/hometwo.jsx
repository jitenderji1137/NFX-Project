'use client'
import Styles from "./hometwo.module.css"
import { useEffect,useRef } from "react";
import Image from "next/image"
export default function HomeFour(){
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);
    return(
        <>
        <div className={Styles.HomeTwo}>
            <div>
                <div>Watch everywhere</div>
                <div>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
            </div>
            <div><video ref={ vidRef } autoplay playsinline muted loop><source src="/WatchAnywhere.m4v" type="video/mp4"/></video><Image src="/WatchEveryWhere.png" width={1000} height={1000}/></div>
        </div>
        </>
    )
}