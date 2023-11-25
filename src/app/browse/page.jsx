'use server'
import Navbar from "../Components/NavBar/navbar"
import BrowseOne from "./Components/BrowseOne/browseone"
import Scroller from "./Components/Scoroller/scroller"
export default async function browse(){
    return(
        <>
        <Navbar/>
        <BrowseOne/>
        <Scroller/>
        </>
    )
}