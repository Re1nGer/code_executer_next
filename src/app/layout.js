import { Inter } from 'next/font/google'
import './globals.css'
import {getServerSession} from "next-auth";
import SessionProvider from "@/contexts/SessionProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import '../prism/prism.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AlgoExpert | Ace the Coding Interview',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession(authOptions);


  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
