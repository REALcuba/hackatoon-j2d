import { useState, useEffect } from "react";
import { AxiosInstance, AxiosResponse } from "axios";
import { method } from '../types/types'
// Importar tipos relacionados a Axios según tus necesidades
const useAxios = (
    configObj: {
        axiosInstance: AxiosInstance;
        method: method;
        url: string;
    }
): [string, boolean, AxiosResponse | null] => {
    const { axiosInstance, method, url } = configObj;
    const [res, setRes] = useState<AxiosResponse | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await axiosInstance[method](
                    url,
                    {
                        signal: controller.signal,
                    }
                );
                setRes(response);
                // console.log(res);

                setLoading(false);
            } catch (err) {
                setError(err.message);
                console.error(err);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // useEffect cleanup function
        // return () => {
        //     controller.abort();
        // };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [error, loading, res];
};

export default useAxios;
