
import App from './App'
import './globals.css'



export const metadata = {
  title: 'D & D Wedding Invitation',
  description: 'You are invited to our wedding!',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;1,200" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400" rel="stylesheet"></link>
      </head>
      <body>
      <App>
        {children}
        </App>
        </body>

    </html>
  )
}
