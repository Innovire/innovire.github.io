import '@/styles/globals.css';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <div className="overflow-x-hidden">
          <Head>
              <title>Innovire</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/logo/tab-logo.png" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </div>
  )
}
