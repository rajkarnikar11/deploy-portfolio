import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang="en">
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Georama:wght@300&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="path/to/bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="apple-touch-icon" href="/icon512x512.png" />
                <meta name="theme-color" content="#131331"/>
                <meta name="description" content="Portfolio website"></meta>
                <title>Salil Rajkarnikar | Portfolio</title>
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}}
export default MyDocument
