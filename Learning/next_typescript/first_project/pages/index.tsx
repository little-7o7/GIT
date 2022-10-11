import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.scss";
import useRequest from '../src/hooks/useRequest';
import useAxios from '../src/hooks/useAxios';

const Home: NextPage = () => {
    // const { request } = useRequest();
    // POST request
    // request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
    //     .then(res => console.log(res, 'Отправка успешна'))
    //     .catch(err => console.log(err));

    // GET request
    // request("http://localhost:3001/filters")
    //     .then(data => console.log(data))
    //     .catch(e => console.log(e))

    // DELETE request 
    // request(`http://localhost:3001/heroes/1`, "DELETE")
    //     .then(data => console.log(data, 'Deleted'))
    //     .catch(err => console.log(err));

    // PATCH request
    // request("http://localhost:3001/heroes/1", 'PATCH', JSON.stringify(newHero))
    //     .then(data => console.log(data))
    //     .catch(e => console.log(e))

    let obj = {
        "img": "img/tabs/vegasasdfasdfdfsdy.jpg",
        "altimg": "vegasdfasdfasdfasfsy",
        "title": "Меaasdfdsfню 'asdasdfasdfasdfasfdФитнес'",
        "descr": "Менвaasdfasdfasdfsdfых лasfdasfюдей. Это абсолют",
        "price": 92312342342344
    }

    const { useGET, usePOST, useDELETE, useEDIT } = useAxios();
    // useGET('http://localhost:3001/menu')
    //     .then(res => console.log(res))

    // usePOST('http://localhost:3001/menu/', JSON.stringify(obj));

    // useDELETE(`http://localhost:3001/menu/${6}`);

    // useEDIT(`http://localhost:3001/menu/${1}`, JSON.stringify(obj))

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Created by little_7o7" />
            </Head>
            <div className={styles.container}></div>
        </>
    );
};

export default Home;
