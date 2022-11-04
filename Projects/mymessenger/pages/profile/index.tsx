import type { NextPage } from 'next'
import Head from 'next/head'
import ProfileDatas from '../../src/components/ProfileDatas/ProfileDatas'
import ProfileLayout from '../../src/layouts/ProfileLayout/ProfileLayout'

const Profile: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Creater by little_7o7" />
            </Head>
            <ProfileLayout
                displayName='little_7o7'
                avatar='https://firebasestorage.googleapis.com/v0/b/mymessenger-42308.appspot.com/o/little_7o71665918275264?alt=media&token=5775a67d-1dea-4fee-9ddc-02daec76e548'
            >
                <ProfileDatas
                    avatar='https://firebasestorage.googleapis.com/v0/b/mymessenger-42308.appspot.com/o/little_7o71665918275264?alt=media&token=5775a67d-1dea-4fee-9ddc-02daec76e548'
                    email='munisxonovmaxmudxon@gmail.com'
                    login='little_7o7'
                    name='Makhmudkhon'
                    lastName='Muniskhonov'
                    displayName='little_7o7'
                    phoneNumber='+998330737477'
                />
            </ProfileLayout>
        </div>
    )
}

export default Profile