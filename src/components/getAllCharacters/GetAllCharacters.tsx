import useAxios from '../../hooks/useAxios'
import { axiosClient } from '../../api/axiosclient'
// import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useRef } from 'react'
import { useStore } from '../../store/useStore'
import { Character } from 'rickmortyapi'
// import { CardActionArea } from '@mui/material';
const GetAllCharacters = () => {
    const [error, loading, res] = useAxios({
        axiosInstance: axiosClient,
        method: 'get',
        url: '/character',
    })
    const elementRef = useRef<HTMLAnchorElement | null>(null)
    const { setSelectedCharacter } = useStore()
    const navigate = useNavigate() 
    const handleLocationClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const selectedCharacter = e.currentTarget.getAttribute('data-character')

        if (selectedCharacter) {
            const { originName } = JSON.parse(selectedCharacter)
            // console.log('Species:', species)
            console.log('Origin Name:', originName)
        }
        navigate('/location')
    }
    const handleSpeciesClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const selectedCharacter = e.currentTarget.getAttribute('data-character')

        if (selectedCharacter) {
            const { species } = JSON.parse(selectedCharacter)
            console.log('Species:', species)

            // console.log('Origin Name:', originName)
        }
    }
    return (
        <section className=' flex m-3 flex-col overflow-auto w-full rounded-md box-border'>
            {loading && <p>loading...</p>}
            {!loading && error && <p className='errorMsg'>{error}</p>}
            {!loading && !error &&
                <>
                    <div>
                        <p className='font-bold text-center border border-b-0'>Characters in episode</p>

                        <div className='grid grid-cols-1 border md:grid-cols-2 lg:grid-cols-3  gap-2 justify-items-center  pt-3 mb-3'
                        >

                        {res?.data.results.map((character: Character) =>

                            <Card key={character.id}
                                className=' hover:scale-125'
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedCharacter(character)
                                    // handleCharacterClick(character)
                                }}
                                sx={{ border: 1, flexWrap: 'wrap', alignItems: 'center', maxWidth: 215, minHeight: 250, maxHeight: 225, margin: 1, display: 'flex', justifyContent: 'center' }} >
                                    {/* <li className=''>
                                       
                                    </li> */}
                                    {/* <CardActionArea> */}
                                <Link to={`/character/${character.id}`} ref={elementRef}>  <CardMedia sx={{ maxHeight: 150, maxWidth: '80%', margin: 1, borderRadius: '5%' }}
                                        component="img"
                                        image={character.image}
                                        alt={character.name}

                                /></Link>
                                    <CardContent sx={{ padding: 1 }}>
                                    <Typography gutterBottom component="div" sx={{ fontFamily: 'creepster', marginBottom: 0, padding: 0 }}
                                        >
                                            {character.name}
                                        </Typography>
                                        <div className='flex  items-center divide-x divide-black'>
                                            <Typography variant="body2" color="text.secondary"
                                                sx={{ paddingRight: 1 }}
                                                onClick={handleSpeciesClick}
                                                data-character={JSON.stringify({
                                                    species: character.species,

                                                })}>
                                                {character.species}
                                            </Typography>
                                            {/* <span className='flex items-center'>|</span> */}
                                            <Typography component="span" variant="body2"
                                                sx={{ paddingLeft: 1 }}
                                                onClick={handleLocationClick}
                                                data-character={JSON.stringify({
                                                    originName: character.origin.name

                                                })} color="text.secondary">
                                                {character.origin.name}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    {/* </CardActionArea> */}

                                </Card>

                            )}
                        </div>
                    </div>
                </>}

        </section >
    )
}

export default GetAllCharacters