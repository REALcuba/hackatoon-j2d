import { useState, useEffect, useCallback, Dispatch, SetStateAction } from "react"
import { AxiosInstance, AxiosResponse } from "axios"
import { method } from '../types/types'

interface PageInfo {
    prev: string | null;
    next: string | null;
}

const useAxios = (
    configObj: {
        axiosInstance: AxiosInstance;
        method: method;
        url: string;
    }
): [string, boolean, AxiosResponse | null, PageInfo, () => void, () => void, number, Dispatch<SetStateAction<number>>] => {
    const { axiosInstance, method, url } = configObj
    const [res, setRes] = useState<AxiosResponse | null>(null)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState(1)
    const [pageInfo, setPageInfo] = useState<PageInfo>({
        prev: null,
        next: null,
    })

    const fetchData = useCallback(async (requestUrl: string) => {
        const controller = new AbortController()
        try {
            const response = await axiosInstance[method](
                requestUrl,
                {
                    signal: controller.signal,
                }
            )
            setRes(response)
            setPageInfo({
                prev: response.data.info.prev,
                next: response.data.info.next,
            })
            setLoading(false)
        } catch (err) {
            setError(err.message)
            console.error(err)
            setLoading(false)
        } finally {
            setLoading(false)
        }
        return () => {
            controller.abort()
        }
    }, [axiosInstance, method])

    useEffect(() => {
        fetchData(url)
    }, [fetchData, url])

    const getNextPage = useCallback(() => {
        if (pageInfo.next === null) {
            return
        }
        if (pageInfo.next) {
            fetchData(pageInfo.next)
            setPage(page + 1)
        }
    }, [fetchData, page, pageInfo.next])

    const getPrevPage = useCallback(() => {
        if (pageInfo.prev) {
            fetchData(pageInfo.prev)
        }
        setPage(page - 1)
    }, [fetchData, page, pageInfo.prev])

    return [error, loading, res, pageInfo, getNextPage, getPrevPage, page, setPage]
}

export default useAxios
