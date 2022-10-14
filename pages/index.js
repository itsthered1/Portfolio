import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div class="center">
      <h1>
        <a href="/photo" class="underline">Photography</a>
        <br></br>
        <a href="https://github.com/itsthered1" class="underline">Programming</a>
        <br></br>
        <a href="https://albumoftheyear.org/user/mrclaudio" class="underline">Music Reviews</a>
        <br></br>
        <a href="/about" class="underline">About</a>
      </h1>
    </div>
  
  );
}
