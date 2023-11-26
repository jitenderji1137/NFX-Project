import Navbar from "../Components/NavBar/navbar"
import BrowseOne from "./Components/BrowseOne/browseone"
import Scroller from "./Components/Scoroller/scroller"
import Tab from "./Components/Tab"
export const metadata = {
    title: 'Browse On Netflix Mirror || Watch TV Shows Online, Watch Movies Online',
    description: 'Unlock the ultimate entertainment experience with Netflix Mirror, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix Mirror is your passport to endless entertainment, available anytime, anywhere.',
    openGraph: {
      title: 'Browse On Netflix Mirror - Watch TV Shows Online, Watch Movies Online',
      description: 'Unlock the ultimate entertainment experience with Netflix Mirror, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix Mirror is your passport to endless entertainment, available anytime, anywhere.',
      images: 'https://i.postimg.cc/MG4HqgY6/Screenshot-98.png',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Browse On Netflix Mirror - Watch TV Shows Online, Watch Movies Online',
      description: 'Unlock the ultimate entertainment experience with Netflix Mirror, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix Mirror is your passport to endless entertainment, available anytime, anywhere.',
      siteId: '1467726470533754880',
      creator: '@nextjs',
      creatorId: '1467726470533754880',
      images: ['https://i.postimg.cc/MG4HqgY6/Screenshot-98.png'],
    },
  }
  export async function getStaticPaths() {
    return {props: {}}
  }
export default function Page(){
    return(
        <>
        <Navbar/>
        <BrowseOne/>
        <Scroller/>
        <Tab/>
        </>
    )
}