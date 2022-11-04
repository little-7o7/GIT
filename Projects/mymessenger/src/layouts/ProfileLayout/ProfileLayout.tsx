import styles from './ProfileLayout.module.scss'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Button, IconButton, Input } from '@chakra-ui/react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { RiImageAddFill } from 'react-icons/ri';

import { disableNetwork } from 'firebase/firestore';

interface IProfileLayout {
    children: any;
    avatar: string;
    displayName: string;
}

const ProfileLayout = (props: IProfileLayout) => {
    const { avatar, displayName } = props
    const [avatarModal, setAvatarModal] = useState(false);
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftLinkButton}>
                <Link href={'/'}>
                    <IconButton aria-label='Go to Home' borderRadius={'100%'} backgroundColor={'#3369f3'} _hover={{ background: '#0048ff' }} icon={<BsArrowLeftShort size={'27px'} />} />
                </Link>
            </div>
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageDiv} style={{ backgroundImage: `url(${avatar})` }}>
                            {!avatar ? <RiImageAddFill size={70} /> : ''}
                            <button className={styles.displayModalForImage} onClick={() => setAvatarModal(!avatarModal)}>
                                <RiImageAddFill size={70} />
                            </button>
                        </div>
                        <span>{displayName}</span>
                    </div>
                    {props.children}
                </div>
            </div>
            <div className={styles.modalScreenForChangeAvatar} style={avatarModal ? { display: 'flex' } : { display: 'none' }}>
                <div className={styles.bg} onClick={() => setAvatarModal(!avatarModal)}></div>
                <div className={styles.center}>
                    <span>Avatar Changer</span>
                    <form>
                        <Input type={'file'} accept="image/png, image/jpeg" onChange={onImageChange} className="filetype" />
                        {image ?
                            <div className={styles.imageDiv}>
                                <img src={image} alt="preview image" />
                            </div>
                            : ''}
                        <Button disabled={!image ? true : false}>Upload</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout