import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import ChatsResizerLayout from '../src/layouts/ChatsResizerLayout/ChatsResizerLayout'
import { contacts, chats } from '../app/slices/navigationPanelSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import Link from 'next/link';

const Index: NextPage = () => {
    const router = useRouter();
    const navigationPanelStatus = useAppSelector((state) => state.navigationPanel.value)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if (1 + 1) {
            // router.push('/login')
        }
    }, [])

    return (
        <div>
            <Head>
                <title>myMessenger</title>
                <meta name="description" content="Creater by little_7o7" />
            </Head>
            <ChatsResizerLayout chats={navigationPanelStatus}>
                <Link href='/login'>login</Link>
                <br />
                <Link href='/register'>register</Link>
            </ChatsResizerLayout>
        </div>
    )
}

export default Index