import HomeOne from "./Components/HomeOne/homeone"
export const metadata = {
  metadataBase: new URL('https://nfx-free.vercel.app/'),
  title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
  description: 'Unlock the ultimate entertainment experience with Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix is your passport to endless entertainment, available anytime, anywhere.',
  openGraph: {
    title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    description: 'Unlock the ultimate entertainment experience with Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix is your passport to endless entertainment, available anytime, anywhere.',
    images: 'https://i.postimg.cc/bJ8VGYyD/Graph-Image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    description: 'Unlock the ultimate entertainment experience with Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix is your passport to endless entertainment, available anytime, anywhere.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://i.postimg.cc/bJ8VGYyD/Graph-Image.png'],
  },
  generator: 'Next.js',
  applicationName: 'Netflix',
  referrer: 'origin-when-cross-origin',
  keywords: ['Netflix', 'Free-Netflix', 'free-netflix','watch movies for free'],
  authors: [{ name: 'jitenderji1137' }, { name: 'vijayji1137', url: 'https://www.instagram.com/vijayji1137/' }],
  creator: 'jitenderji1137',
  publisher: 'jitenderji1137',
}
export default function generateStaticParams() {
  return (
    <>
    <HomeOne/>
    </>
  )
}
