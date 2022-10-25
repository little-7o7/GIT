import { background, IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'
import styles from './ProfileLayout.module.scss'

interface IProfileLayout {
    children: any
}

const ProfileLayout = (props: IProfileLayout) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftLinkButton}>
                <Link href={'/'}>
                    <IconButton aria-label='Go to Home' borderRadius={'100%'} backgroundColor={'#3369f3'} _hover={{background: '#0048ff'}} icon={<BsArrowLeftShort size={'27px'} />} />
                </Link>
            </div>
            <div className={styles.main}>
                {props.children}
            </div>
        </div>
    )
}

export default ProfileLayout