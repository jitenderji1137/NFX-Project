'use client'
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./render.module.css"
export default function Render({Data}){
    const containerRef = useRef(null);
    const handelScrollLeft = ()=>{
        if(containerRef.current){
          const container = containerRef.current;
          container.scrollLeft -= window.innerWidth*0.8;
        }
       }
       const handelScrollRight = ()=>{
        if(containerRef.current){
          const container = containerRef.current;
          container.scrollLeft += window.innerWidth*0.8;
        }
    }   
    return (
        <div>
            <div className={Styles.customContainer}>
                <span>{Data[1]}</span>
                <Link href={Data[2]}>More &#x276F;&#x276F;</Link>
            </div>
            <div ref={containerRef} className={Styles.Conainer}>
            <button className={Styles.ScrollLeft} onClick={handelScrollLeft}>&nbsp;&nbsp; &#x276E;&#x276E; &nbsp;&nbsp;&nbsp;&nbsp;</button>
                {Data[0].map((item) => (
                    <div key={item.ID} className={Styles.OneImage}>
                        <Link href={`/entertainment/player/${item.ID}/${item.Title.split(" ").join("-")}`}><Image className={Styles.Images} src={item.Image} alt={`Image ${item.ID}`} title={item.Title} width={300} height={300} /></Link>
                    </div>
                ))}
            <button className={Styles.ScrollRight} onClick={handelScrollRight}>&nbsp;&nbsp;&nbsp;&nbsp; &#x276F;&#x276F; &nbsp;&nbsp;</button>
            </div>
        </div>
    )
}