import { clsx } from 'clsx'
import { DarkToggleProvider, DarkToggleScript } from 'dark-toggle/react'
import { Nunito, Handlee, Sorts_Mill_Goudy } from 'next/font/google'

import { Provider } from '@/provider'

import type { Metadata, Viewport } from 'next'

import './globals.css'

const sans = Nunito({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-remote-sans',
  display: 'swap',
})

const serif = Sorts_Mill_Goudy({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-remote-serif',
  display: 'swap',
})

const handwriting = Handlee({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-remote-handwriting',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: {
    absolute: 'surfing.fish',
    template: '%s | surfing.fish',
  },
  description:
    'As a backend programmer, I excel in Java, Spring Boot, MongoDB, MySQL, Redis, RabbitMQ, Vue.js, and other technologies. I am passionate about coding and enthusiastic about learning and exploring new technologies.',
  keywords: [
    'As a backend programmer',
    'Java',
    'JavaScript',
    'Spring Boot',
    'MongoDB',
    'MySQL',
    'Redis',
    'RabbitMQ',
    'Vue.js',
  ],
  applicationName: 'surfing.fish',
  authors: {
    name: 'liqingyou',
    url: 'https://github.com/liqingyou',
  },
  creator: 'liqingyou',
  publisher: 'liqingyou',
  generator: 'Next.js',
  verification: {
    google: 'ULSANpODFw1TULe1QTOUFT8z8QXPVIA1MRTMQL7PAbw',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={clsx(sans.variable, serif.variable, handwriting.variable)}
    >
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icon/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icon/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icon/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='512x512'
          href='/icon/android-chrome-512x512.png'
        />
        <DarkToggleScript />
      </head>
      <body className='bg-surface font-primary text-color-1'>
        <div className='fixed inset-0 bottom-1/4 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:hidden' />
        <Provider>
          <DarkToggleProvider>{children}</DarkToggleProvider>
        </Provider>
      </body>
    </html>
  )
}
