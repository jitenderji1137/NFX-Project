'use server'
import Tab from "@/app/browse/Components/Tab";
import Navbar from "../../Components/NavBar/navbar";
import IframePlayer from "./Components/Iframe/iframe";
export default async function Player({ params }){
    const player = params.player[0];
    return(
        <>
        <Navbar/>
        <IframePlayer ID={player}/>
        <Tab/>
        </>
    )
}