import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
  description: 'Unlock the ultimate entertainment experience with Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix is your passport to endless entertainment, available anytime, anywhere.',
  generator: 'Next.js',
  applicationName: 'Netflix',
  referrer: 'origin-when-cross-origin',
  keywords: ['Netflix', 'Free-Netflix', 'free-netflix','watch movies for free'],
  authors: [{ name: 'jitenderji1137' }, { name: 'vijayji1137', url: 'https://www.instagram.com/vijayji1137/' }],
  creator: 'jitenderji1137',
  publisher: 'jitenderji1137',
  openGraph: {
    title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    description: 'Unlock the ultimate entertainment experience with Netflix, where every movie and web series is at your fingertips, completely free of charge. No more waiting for the latest releases, no more financial barriers, Netflix is your passport to endless entertainment, available anytime, anywhere.',
    images: '/GraphImage.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
