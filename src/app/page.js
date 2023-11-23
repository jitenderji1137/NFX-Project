import HomeFive from "./Components/HomeFive/hometwo"
import HomeFour from "./Components/HomeFour/hometwo"
import HomeOne from "./Components/HomeOne/homeone"
import HomeThree from "./Components/HomeThree/homethree"
import HomeTwo from "./Components/HomeTwo/hometwo"
export const metadata = {
  metadataBase: new URL('https://nfx-free.vercel.app/'),
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
  generator: 'Next.js',
  applicationName: 'Netflix Mirror',
  referrer: 'origin-when-cross-origin',
  keywords: ['Netflix Mirror', 'Free-Netflix-Mirror', 'free-Netflix Mirror','watch movies for free'],
  authors: [{ name: 'jitenderji1137' }, { name: 'vijayji1137', url: 'https://www.instagram.com/vijayji1137/' }],
  creator: 'jitenderji1137',
  publisher: 'jitenderji1137',
}
export default function generateStaticParams() {
  return (
    <>
    <HomeOne/>
    <HomeTwo/>
    <HomeThree/>
    <HomeFour/>
    <HomeFive/>
    </>
  )
}
