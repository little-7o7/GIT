import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import ChatsResizerLayout from '../src/layouts/ChatsResizerLayout/ChatsResizerLayout'
import { contacts, chats, profile } from '../app/slices/navigationPanelSlice'
import { useAppSelector, useAppDispatch } from '../app/hooks';

const Index: NextPage = () => {
    const router = useRouter();
    const navigationPanesStatus = useAppSelector((state) => state.navigationPanel.value)
    const dispatch = useAppDispatch()
    dispatch(contacts())
    console.log(navigationPanesStatus);
    

    // useEffect(() => {
    //     if (1 + 1) {
    //         router.push('/login')
    //     }
    // }, [])

    return (
        <div>
            <Head>
                <title>myMessenger</title>
                <meta name="description" content="Creater by little_7o7" />
            </Head>
            <ChatsResizerLayout chats=''>
                
            </ChatsResizerLayout>
        </div>
    )
}

export default Index