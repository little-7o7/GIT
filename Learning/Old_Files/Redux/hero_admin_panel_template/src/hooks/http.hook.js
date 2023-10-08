import { useCallback } from "react";

export const useHttp = () => {
    // const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body, headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', }) => {
        // console.log(url, method, body);
        // setProcess('loading');

        try {
            const response = await fetch(url, method, body, headers);

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            // console.log(data);

            return data;
        } catch (e) {
            // setProcess('error');
            console.log(e);
            throw e;
        }
    }, []);

    const postRequest = async (url, body) => {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });

        let result = await response.json();
    }

    // const clearError = useCallback(() => {
    // setProcess('loading');
    // }, []);

    return {
        request,
        postRequest,
        // clearError, 
        // process, 
        // setProcess
    }
}