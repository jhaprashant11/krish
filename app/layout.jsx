import './globals.css'

export const metadata = {
  title: 'Krish Kumar Kumawat - Portfolio',
  description: 'Portfolio of Krish Kumar Kumawat, Electronics and Communication Engineering student at BIT Bangalore',
  keywords: 'portfolio, developer, gaming, AI, BIT Bangalore, ECE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-gray-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
