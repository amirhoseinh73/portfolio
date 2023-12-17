import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { __DIR_DATA__ } from "@/helpers/config"
import { Toaster } from "react-hot-toast"
import { ReadGlobalData } from "@/helpers/fileHandler"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const data = await ReadGlobalData()

  return {
    title: data.title,
    description: data.title,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100`}>
        {children}

        <Toaster position="bottom-left" />
      </body>
    </html>
  )
}
