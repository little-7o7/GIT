import { useCallback } from "react";

const useAxios = () => {
    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch(e) {
            throw e;
        }
    }, []);



    const useGET = useCallback(async (url: string) => {
        let db
        await request(url)
            .then(data => {
                db = data
            })
            .catch(e => console.log(e))
        return db
    }, []);
    
    const usePOST = useCallback(async (url: string, body: object) => {
        request(url, 'POST', body)
            .then(res => console.log(res, 'Отправка успешна'))
            .catch(err => console.log(err));
    }, []);

    const useDELETE = useCallback(async (url: string) => {
        request(url, 'DELETE')
            .then(data => console.log(data, 'Deleted'))
            .catch(err => console.log(err));
    }, []);

    const useEDIT = useCallback(async (url: string, body: object) => {
        request(url, 'PATCH', body)
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }, []);



    return {
        useGET,
        usePOST,
        useDELETE,
        useEDIT
    }
}

export default useAxios;