import Head from 'next/head'
import SingleCartComponent from "../src/components/SingleCart"

export default function SingleCart() {
    return (
        <>
            <Head>
                <title>Single Pokemon</title>
            </Head>
            <SingleCartComponent />
        </>
    )
}
