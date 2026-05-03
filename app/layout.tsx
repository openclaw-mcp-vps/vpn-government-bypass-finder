import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VPN Bypass Finder — Find Working Protocols During Government Blocks',
  description: 'Crowdsourced database of VPN protocols that work in countries with government VPN blocks. Real-time effectiveness tracking and verified configurations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ac2e1874-b72a-4c9a-8713-87f315ff76bc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
