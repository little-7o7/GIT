import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ProfileLayout from '../../src/layouts/ProfileLayout/ProfileLayout'

const Profile: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Creater by little_7o7" />
            </Head>
            <ProfileLayout>
                
            </ProfileLayout>
        </div>
    )
}

export default Profile