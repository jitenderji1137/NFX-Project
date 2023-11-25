import Styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
    return(
        <>
        <nav className={Styles.Nav}>
            <div>
                <div><Link href="/"><Image src="/Logo.png" width={300} height={300}/></Link></div>
                <div>
                    <Link href="/browse">Home</Link>
                    <Link href="/">TV Shows</Link>
                    <Link href="/">Movies</Link>
                    <Link href="/">My List</Link>
                    <Link href="#">Browse By Genres</Link>
                </div>
            </div>
            <div><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
        </nav>
        </>
    )
}