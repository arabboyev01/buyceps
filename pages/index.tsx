import Head from 'next/head'
import HomePage from '@/src/components/Home'

export default function Home() {
    return (
        <>
            <Head>
                <title>All Pokemons</title>
            </Head>
            <HomePage/>
        </>
    )
}
