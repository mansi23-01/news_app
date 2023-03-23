import Head from 'next/head'
import { Toolbar } from '@/components/toolbar';
import styles from '@/styles/Home.module.css'


export default function Home() {
  return(
    <div className='page-container'>

     <Toolbar/>

      <div className={styles.main}>
        <h1> News Website</h1>
        <h2> The latest news articles are here!!!! "Stay Informed"</h2>
      </div>
    </div>
  );
}