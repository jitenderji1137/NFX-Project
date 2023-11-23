import Styles from "./homethree.module.css"
import Image from "next/image"
export default function HomeThree(){
    return(
        <>
                <div className={Styles.HomeTwo}>
                    <div><Image src="/DownloadBGBanner.jpg" width={1000} height={1000}/></div>
                    <div>
                        <div>Download your shows to watch offline</div>
                        <div>Save your favourites easily and always have something to watch.</div>
                    </div>
                </div>
        </>
    )
}