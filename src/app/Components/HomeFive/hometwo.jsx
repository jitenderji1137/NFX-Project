import Styles from "./hometwo.module.css"
import Image from "next/image"
export default function HomeFive(){
    return(
        <>
                <div className={Styles.HomeTwo}>
                    <div><Image src="/Kids.png" width={1000} height={1000}/></div>
                    <div>
                        <div>Create profiles for kids</div>
                        <div>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
                    </div>
                </div>
        </>
    )
}