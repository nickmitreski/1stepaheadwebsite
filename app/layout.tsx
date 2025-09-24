import "./globals.css"
import { Poppins } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "1 Step Ahead - Financial Education for the Future",
  description: "1 Step Ahead delivers innovative financial education programs that build confidence, understanding, and practical money skills for young people and their communities.",
  keywords: "financial education, money mindset, youth programs, financial literacy, Australia",
  authors: [{ name: "1 Step Ahead" }],
  creator: "1 Step Ahead",
  openGraph: {
    title: "1 Step Ahead - Financial Education for the Future",
    description: "Building financial confidence through innovative education programs",
    url: "https://1stepahead.au",
    siteName: "1 Step Ahead",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Step Ahead - Financial Education for the Future",
    description: "Building financial confidence through innovative education programs",
    creator: "@1stepahead.au",
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
