"use client"

import './globals.css'
import type { Metadata } from 'next'
import Navbar  from './components/Navbar'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

/* export const metadata: Metadata = {
  title: 'Workout Log',
  description: 'Workout Log made by El-Amine Bendaas to track my workouts',
}
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <SessionProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='flex min-h-screen flex-col lg:p-24 md:p-24 sm:pr-12 sm:pl-12'>
          {children}
        </div>
      </body>
    </html>
  </SessionProvider>
  )
}
