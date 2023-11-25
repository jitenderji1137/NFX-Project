import Styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Navbar(){
    return(
        <>
            <header className="_header_63izq_19">
                <div className="_nav-left_63izq_41">
                    <Link className="_nf-logo_63izq_62" href="/browse"><Image src="/logo.png" alt="netflix logo" width={300} height={300}/></Link>
                       <ul className="_nav-left__list_63izq_46">
                           <li>
                               <Link aria-current="page" className="active" href="/browse">Home</Link>
                           </li>
                           <li>
                               <Link className="" href="/tv">TV Shows</Link>
                           </li>
                           <li>
                               <Link className="" href="/movie">Movies</Link>
                           </li>
                           <li>
                               <Link className="" href="/list">My List</Link>
                           </li>
                           <li>
                               {/* <div className="_genre_63izq_115">
                                   <span>Browse By Genres</span>
                                   <div className="_genre-popup_63izq_121" style="display: none;">
                                       <div>
                                           <span>MOVIES</span>
                                           <ul>
                                               <li><a href="/genres/movie/12">adventure</a></li>
                                               <li><a href="/genres/movie/14">fantasy</a></li>
                                               <li><a href="/genres/movie/16">animation</a></li>
                                               <li><a href="/genres/movie/18">drama</a></li>
                                               <li><a href="/genres/movie/27">horror</a></li>
                                               <li><a href="/genres/movie/28">action</a></li>
                                               <li><a href="/genres/movie/35">comedy</a></li>
                                               <li><a href="/genres/movie/36">history</a></li>
                                               <li><a href="/genres/movie/37">western</a></li>
                                               <li><a href="/genres/movie/53">thriller</a></li>
                                               <li><a href="/genres/movie/80">crime</a></li>
                                               <li><a href="/genres/movie/99">documentary</a></li>
                                               <li><a href="/genres/movie/878">science fiction</a></li>
                                               <li><a href="/genres/movie/9648">mystery</a></li>
                                               <li><a href="/genres/movie/10402">music</a></li>
                                               <li><a href="/genres/movie/10749">romance</a></li>
                                               <li><a href="/genres/movie/10751">family</a></li>
                                               <li><a href="/genres/movie/10752">war</a></li>
                                               <li><a href="/genres/movie/10770">tv movie</a></li>
                                           </ul>
                                       </div>
                                       <div>
                                           <span>TV</span>
                                           <ul>
                                               <li><a href="/genres/tv/16">animation</a></li>
                                               <li><a href="/genres/tv/18">drama</a></li>
                                               <li><a href="/genres/tv/35">comedy</a></li>
                                               <li><a href="/genres/tv/37">western</a></li>
                                               <li><a href="/genres/tv/80">crime</a></li>
                                               <li><a href="/genres/tv/99">documentary</a></li>
                                               <li><a href="/genres/tv/9648">mystery</a></li>
                                               <li><a href="/genres/tv/10751">family</a></li>
                                               <li><a href="/genres/tv/10759">action adventure</a></li>
                                               <li><a href="/genres/tv/10762">kids</a></li>
                                               <li><a href="/genres/tv/10763">news</a></li>
                                               <li><a href="/genres/tv/10764">reality</a></li>
                                               <li><a href="/genres/tv/10765">sci fi fantasy</a></li>
                                               <li><a href="/genres/tv/10766">soap</a></li>
                                               <li><a href="/genres/tv/10767">talk</a></li>
                                               <li><a href="/genres/tv/10768">war politics</a></li>
                                           </ul>
                                       </div>
                                   </div>
                               </div> */}
                           </li>
                       </ul>
                   </div>
                <div className="_nav-right_63izq_58"><button className="_search-btn_63izq_101" aria-label="Search"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div>
            </header>
        </>
    )
}