import useAxios from '../hooks/useAxios'
import { axiosClient } from '../api/axiosclient'
// import * as React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
// import { CardActionArea } from '@mui/material';
const GetAllCharacters = () => {
    const [error, loading, res] = useAxios({
        axiosInstance: axiosClient,
        method: 'get',
        url: '/character',
    })
    return (
        <section className=' bg-green-400 flex m-4 flex-col overflow-auto  rounded-md box-border'>
            {loading && <p>loading...</p>}
            {!loading && error && <p className='errorMsg'>{error}</p>}
            {!loading && !error &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-screen gap-2 items-center box-border pt-3 mb-3'
                >
                    {/* <ul className='divide-y m-1 p-2 space-y-1'> */}
                    {res?.data.results.map((character: { id: number, name: string, image: string, species: string, origin: { name: string } }) =>

                        <Card key={character.id} sx={{ maxWidth: 215, minHeight: 300, maxHeight: 225, margin: 'auto' }} >
                            {/* <li className=''>
                                       
                                    </li> */}
                            {/* <CardActionArea> */}
                            <CardMedia sx={{ margin: 1, maxHeight: 250, maxWidth: 200, borderRadius: '5%' }}
                                component="img"
                                image={character.image}
                                alt={character.name}
                            />
                            <CardContent sx={{ padding: 1 }}>
                                <Typography gutterBottom component="div" sx={{ marginBottom: 0, padding: 0 }}>
                                    {character.name}
                                </Typography>
                                <div className='flex gap-1'>
                                    <Typography variant="body2" color="text.secondary">
                                        {character.species} / {character.origin.name}
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        
                                    </Typography> */}
                                </div>
                            </CardContent>
                            {/* </CardActionArea> */}

                        </Card>

                    )}
                    {/* </ul> */}
                </div>}
            {/* <div className='flex justify-center m-2 p-2'>
                <button type="submit" className='bg-blue-500 rounded-sm py-1 px-2 box-border hover:bg-green-700 hover:border'>Get More Episodes</button>
            </div> */}
        </section >
    )
}

export default GetAllCharacters