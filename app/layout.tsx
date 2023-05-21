import { AuthContextProvider } from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Remedie Genie',
  description: 'Homeophatic assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
