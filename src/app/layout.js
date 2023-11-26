import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  metadataBase: new URL('https://nfx-free.vercel.app/'),
  generator: 'Next.js',
  applicationName: 'Netflix Mirror',
  referrer: 'origin-when-cross-origin',
  keywords: ['Netflix Mirror', 'Free-Netflix-Mirror', 'free-Netflix Mirror','watch movies for free'],
  authors: [{ name: 'jitenderji1137' }, { name: 'vijayji1137', url: 'https://www.instagram.com/vijayji1137/' }],
  creator: 'jitenderji1137',
  publisher: 'jitenderji1137',
}
export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>

  )
}
