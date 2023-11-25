'use server'
import Navbar from "../Components/NavBar/navbar"
import BrowseOne from "./Components/BrowseOne/browseone"
export default async function browse(){
    return(
        <>
        <Navbar/>
        <BrowseOne/>
        </>
    )
}