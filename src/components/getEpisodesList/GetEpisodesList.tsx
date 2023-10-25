import useAxios from '../../hooks/useAxios'
import { axiosClient } from '../../api/axiosclient'
const GetEpisodesList = () => {
    const [error, loading, res] = useAxios({
        axiosInstance: axiosClient,
        method: 'get',
        url: '/episode',
    })
    return (
        <aside className='w-1/3 bg-green-400 flex flex-col rounded-md'>
            {loading && <p>loading...</p>}
            {!loading && error && <p className='errorMsg'>{error}</p>}
            {!loading && !error && <div className='flex flex-col items-center gap-1 m-1 p-2 divide-y '
            >{res?.data.results.map((episode: { name: string }) => <ul><li>{episode.name}</li></ul>)}</div>}
        </aside>
    )
}

export default GetEpisodesList