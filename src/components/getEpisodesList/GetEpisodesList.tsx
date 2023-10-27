import useAxios from '../../hooks/useAxios'
import { axiosClient } from '../../api/axiosclient'
import { Episode } from 'rickmortyapi'
// import { SetStateAction, useState } from 'react'
// import { useState } from 'react';
type GetEpisodesProps = {
    handleEpisodeClick: (episode: Episode) => void;
    // episode: any
}
const GetEpisodesList: React.FC<GetEpisodesProps> = ({ handleEpisodeClick }) => {

    const [error, loading, res, pageInfo, getNextPage, getPrevPage, page] = useAxios({

        axiosInstance: axiosClient,
        method: 'get',
        url: '/episode',
    })


    return (
        <aside className='w-1/2 bg-green-400 flex m-3 flex-col max-h-screen overflow-none rounded-md box-border sm:w-1/3'>
            <h3 className='text-center font-bold'>List of Episodes</h3>
            {loading && <p>loading...</p>}
            {!loading && error && <p className='errorMsg'>{error}</p>}
            {!loading && !error &&
                <div className='flex flex-col items-center box-border overflow-auto '
                ><ul className='divide-y m-1 p-2 space-y-1'>
                        {res?.data.results.map((episode: Episode) =>

                            <li key={episode.id} className='' onClick={() => handleEpisodeClick(episode)}>
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
                    <div className='space-x-2'>
                        <button className='bg-blue-500 rounded-sm py-1 px-2  box-border hover:bg-green-700 hover:border'
                            onClick={getPrevPage}>Prev</button>
                        <button className='bg-blue-500 rounded-sm py-1 px-2 box-border hover:bg-green-700 hover:border'
                            onClick={getNextPage}>Next</button>
                    </div>
                )}
            </div>
            {/* <div className="w-1/2 bg-gray-200 p-3">
                {selectedEpisode && <EpisodeDetails episode={selectedEpisode} />}
            </div> */}
        </aside>
    )
}

export default GetEpisodesList