import '../styles/global.css'
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <>
    <header style={{ position: router.asPath == "/" || router.asPath == "/about" ? "fixed" : "sticky" }}>
      <h1 class="typewriter"><a href="/">claudio rojas</a></h1>
    </header>
    <Component {...pageProps} />
  </>
}