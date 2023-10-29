import useAxios from '../../hooks/useAxios'
import { axiosClient } from '../../api/axiosclient'
import { Location } from 'rickmortyapi'
import ListFilter from '../../components/listFilter/ListFilter'
import { useState } from 'react'
type GetLocationProps = {
    handleLocationClick: (location: Location) => void;
    // location: any
}
const GetLocationList: React.FC<GetLocationProps> = () => {
    const [url, setUrl] = useState('/location')
    const handleFilterChange = (url: string) => {
        setUrl(url)
    }
    const [error, loading, res, pageInfo, getNextPage, getPrevPage, page, setPage] = useAxios({

        axiosInstance: axiosClient,
        method: 'get',
        url: url,
    })
    const listText = url !== 'character' ? 'List of locations' : 'List of Characters'
    const moreBtn = url !== 'character' ? 'Get More locations' : ' Get More Characters'
    return (
        <aside className='w-1/2 flex m-3  flex-col max-h-screen border overflow-none rounded-md box-border md:min-w-1/3'>
            <ListFilter setUrl={handleFilterChange} setPage={setPage} />
            <h3 className='text-center font-bold'>{listText}</h3>
            {loading && <p>loading...</p>}
            {!loading && error && <p className='errorMsg'>{error}</p>}
            {!loading && !error &&
                <div className='flex flex-col items-center box-border overflow-auto '
                ><ul className='divide-y m-1 p-2 space-y-1'>
                        {res?.data.results.map((location: Location) =>

                            <li key={location.id} className='hover:bg-gray-500 cursor-pointer' onClick={() => handlelocationClick(location)}>
                                {location.name}
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
                        {moreBtn}
                        {/* {url === 'location' ? 'Get More locations' : ' Get More Characters'} */}
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

        </aside>
    )
}

export default GetLocationList