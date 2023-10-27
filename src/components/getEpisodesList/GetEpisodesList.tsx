import useAxios from '../../hooks/useAxios'
import { axiosClient } from '../../api/axiosclient'
// import { useState } from 'react';
const GetEpisodesList = () => {

    const [error, loading, res, pageInfo, getNextPage, getPrevPage, page] = useAxios({


        axiosInstance: axiosClient,
        method: 'get',
        url: '/episode',
    })
    return (
        <aside className='w-1/2 bg-green-400 flex m-3 flex-col max-h-screen overflow-none rounded-md box-border sm:w-1/3'>
            {loading && <p>loading...</p>}
            {!loading && error && <p className='errorMsg'>{error}</p>}
            {!loading && !error &&
                <div className='flex flex-col items-center box-border overflow-auto '
                ><ul className='divide-y m-1 p-2 space-y-1'>
                        {res?.data.results.map((episode: { id: number, name: string }) =>

                            <li key={episode.id} className=''>
                                {episode.name}
                            </li>
                        )} </ul>
                    <span>page: {page}</span>
                </div>}

            <div className='flex justify-center m-2 p-2'>
                {pageInfo.prev === null ? (
                    <button type="submit"
                        className='bg-blue-500 rounded-sm py-1 px-2 box-border hover:bg-green-700 hover:border'
                        onClick={getNextPage}
                    >
                        Get More Episodes
                    </button>
                ) : (
                    <>
                        <button className='bg-blue-500 rounded-sm py-1 px-2 box-border hover:bg-green-700 hover:border'
                            onClick={getPrevPage}>Prev</button>
                        <button className='bg-blue-500 rounded-sm py-1 px-2 box-border hover:bg-green-700 hover:border'
                            onClick={getNextPage}>Next</button>
                    </>
                )}
            </div>

        </aside>
    )
}

export default GetEpisodesList