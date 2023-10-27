// import useAxios from '../../hooks/useAxios'
// import { axiosClient } from '../../api/axiosclient'
// import * as React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Character } from 'rickmortyapi'
import { useState, useEffect } from 'react'
// import useAxios from '../../hooks/useAxios'
import { axiosClient } from '../../api/axiosclient'

const Thumnail = ({ charactersUrl }: { charactersUrl: string[] }) => {
    const [characterData, setCharacterData] = useState<Character[]>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            const promises = charactersUrl?.map(async (characterUrl) => {
                const response = await axiosClient.get(characterUrl)
                return response.data
            })

            try {
                const characterDetails: Character[] | null = await Promise.all(promises)
                setCharacterData(characterDetails)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchCharacterDetails()
    }, [charactersUrl])

    return (
        <section className='bg-green-400 m-4 flex overflow-auto rounded-md box-border'>
            {loading && <p>loading...</p>}
            {!loading && characterData?.length === 0 && <p className='errorMsg'>No character data available.</p>}
            {!loading && characterData && characterData?.length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-screen gap-2 items-center box-border pt-3 mb-3'>
                    {characterData?.map((character: { id: number, name: string, image: string, species: string, origin: { name: string } }) => (
                        <Card key={character.id} sx={{ maxWidth: 215, minHeight: 300, maxHeight: 225, margin: 'auto' }}>
                            <CardMedia
                                sx={{ margin: 1, maxHeight: 250, maxWidth: 200, borderRadius: '5%' }}
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
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Thumnail