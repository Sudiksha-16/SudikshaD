import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono' // Make sure GeistMono is also imported if used
import { cn } from '@/lib/utils' // Assuming cn utility is available

export const metadata = {
  title: 'Sudiksha D. Portfolio',
  description: 'Sudiksha D. - Computer Science and Engineering student specializing in AI & ML',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body>{children}</body>
    </html>
  )
}
