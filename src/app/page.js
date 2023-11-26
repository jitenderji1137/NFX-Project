import HomeFive from "./Components/HomeFive/hometwo"
import HomeFour from "./Components/HomeFour/hometwo"
import HomeOne from "./Components/HomeOne/homeone"
import HomeSix from "./Components/HomeSix/homesix"
import HomeThree from "./Components/HomeThree/homethree"
import HomeTwo from "./Components/HomeTwo/hometwo"
export const metadata = {
  title: 'Netflix Mirror - Watch TV Shows Online, Watch Movies Online',
  description: 'Unlock the ultimate entertainment experience with Netflix Mirror, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix Mirror is your passport to endless entertainment, available anytime, anywhere.',
  openGraph: {
    title: 'Netflix Mirror - Watch TV Shows Online, Watch Movies Online',
    description: 'Unlock the ultimate entertainment experience with Netflix Mirror, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix Mirror is your passport to endless entertainment, available anytime, anywhere.',
    images: 'https://i.postimg.cc/4yrFryPy/Screenshot-93.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix Mirror - Watch TV Shows Online, Watch Movies Online',
    description: 'Unlock the ultimate entertainment experience with Netflix Mirror, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix Mirror is your passport to endless entertainment, available anytime, anywhere.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://i.postimg.cc/4yrFryPy/Screenshot-93.png'],
  },
}
export async function getStaticPaths() {
  return {props: {}}
}
export default function Home({}) {
  return (
    <>
    <HomeOne/>
    <HomeTwo/>
    <HomeThree/>
    <HomeFour/>
    <HomeFive/>
    <HomeSix/>
    </>
  )
}
