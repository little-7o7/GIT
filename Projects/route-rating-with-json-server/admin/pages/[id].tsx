import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import axios from 'axios'

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if (router.query.id) {
            let dateNow = +Date.now() / 1000
            axios.get(`http://localhost:3333/posts/${router.query.id}`)
                .then(function (response) {
                    const endDate = new Date(response.data.endDate)
                    if (dateNow < +endDate) {
                        axios.put(`http://localhost:3333/posts/${router.query.id}`, { ...response.data, count: response.data.count + 1 })
                            .then(() => {
                                router.push(response.data.originUrl)
                            })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [router.query])

    return (
        <div className='container'>
            <Head>
                <title>Route Rating</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}
