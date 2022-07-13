import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storybook Sample</title>
        <meta name="description" content="Storybook Sample" />
      </Head>
      <main className={styles.main}>Storybook Sample</main>
    </div>
  )
}
