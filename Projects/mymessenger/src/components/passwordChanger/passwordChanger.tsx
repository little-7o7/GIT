import styles from './passwordChanger.module.scss'
import { Button, Input } from '@chakra-ui/react';

interface IPasswordChanger {
    avatar?: string;
    email: string;
    login: string;
    name: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
}

const PasswordChanger = (props: IPasswordChanger) => {
    const {
        avatar,
        email,
        login,
        name,
        lastName,
        displayName,
        phoneNumber,
    } = props;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.datas}>
                <div className={`${styles.lineData} ${styles.borderedLineData}`}>
                    <span className={styles.opacity}>Current password</span>
                    <Input type='password' height={'35px'} w={300} textAlign='end' />
                </div>
                <div className={`${styles.lineData} ${styles.borderedLineData}`}>
                    <span className={styles.opacity}>New password</span>
                    <Input type='password' height={'35px'} w={300} textAlign='end' />
                </div>
                <div className={styles.lineData}>
                    <span className={styles.opacity}>Repeat new password</span>
                    <Input type='password' height={'35px'} w={300} textAlign='end' />
                </div>
                <div className={styles.links}>
                    <Button type='submit' w={'100%'}>Save</Button>
                </div>
            </div>
        </form>
    )
}

export default PasswordChanger 