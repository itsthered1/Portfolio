import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
    <header>
      <h1><Link href="/">claudio rojas</Link></h1>
    </header>

    <body class="center">
      <h1>
        <Link href="https://instagra.com/anerdandacamera">Photography</Link>
        <br></br>
        <Link href="https://github.com/itsthered1">Programming</Link>
        <br></br>
        <Link href="/about">About</Link>
      </h1>
    </body>

    </>
  );
}
