import Styles from "./hometwo.module.css"
import Link from "next/link"
import Image from "next/image"
export default function HomeTwo(){
    return(
        <>
        <div className={Styles.HomeTwo}>
            <div>
                <div>Enjoy on your TV</div>
                <div>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
            </div>
            <div><Image src="/TVFrame.png" width={1000} height={1000}/><video autoplay playsinline muted loop><source src="/TVFrameVideo.m4v" type="video/mp4"/></video></div>
        </div>
        </>
    )
}