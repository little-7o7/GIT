import styles from './ProfileDatas.module.scss'

interface IProfileDatas {
    email: string;
    Login: string;
    name: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
}

const ProfileDatas = (props: IProfileDatas) => {
    return (
        <div className={styles.container}>
            
        </div>
    )
}

export default ProfileDatas 