import styles from './dataChanger.module.scss'
import { Button, Input } from '@chakra-ui/react';

interface IDataChanger {
    avatar?: string;
    email: string;
    login: string;
    name: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
}

const DataChanger = (props: IDataChanger) => {
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
                    <span className={styles.opacity}>Email</span>
                    <Input type='text' height={'35px'} w={300} textAlign='end' defaultValue={email} />
                </div>
                <div className={`${styles.lineData} ${styles.borderedLineData}`}>
                    <span className={styles.opacity}>Login</span>
                    <Input type='text' height={'35px'} w={300} textAlign='end' defaultValue={login} />
                </div>
                <div className={`${styles.lineData} ${styles.borderedLineData}`}>
                    <span className={styles.opacity}>Name</span>
                    <Input type='text' height={'35px'} w={300} textAlign='end' defaultValue={name} />
                </div>
                <div className={`${styles.lineData} ${styles.borderedLineData}`}>
                    <span className={styles.opacity}>Last name</span>
                    <Input type='text' height={'35px'} w={300} textAlign='end' defaultValue={lastName} />
                </div>
                <div className={`${styles.lineData} ${styles.borderedLineData}`}>
                    <span className={styles.opacity}>Display name</span>
                    <Input type='text' height={'35px'} w={300} textAlign='end' defaultValue={displayName} />
                </div>
                <div className={styles.lineData}>
                    <span className={styles.opacity}>Phone number</span>
                    <Input type='text' height={'35px'} w={300} textAlign='end' defaultValue={phoneNumber} />
                </div>
                <div className={styles.links}>
                    <Button type='submit' w={'100%'}>Save</Button>
                </div>
            </div>
        </form>
    )
}

export default DataChanger 