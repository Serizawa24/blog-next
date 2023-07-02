import './globals.css'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucy\' Blog',
  description: 'Create by Lucy',
}
import Header from '@/components/Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">\
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
          <Header />
          <main className={cx('wrapper')}>
            {children}
          </main>
      </body>
    </html>
  )
}
