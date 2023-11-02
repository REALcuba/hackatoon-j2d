import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Character } from 'rickmortyapi'
import { useState, useEffect, useRef } from 'react'
import { axiosClient } from '../../api/axiosclient'
import { Link } from 'react-router-dom'
import { useStore } from '../../store/useStore'

const PaintCharactersDetails = ({ charactersUrl }: { charactersUrl: string[] }) => {
    const [characterData, setCharacterData] = useState<Character[]>()
    const [loading, setLoading] = useState(true)
    const elementRef = useRef<HTMLAnchorElement | null>(null)
    // const navigate = useNavigate()
    const { setSelectedCharacter } = useStore()
    // const handleClick = (e: { stopPropagation: () => void }) => {
    //     e.stopPropagation()
    //     console.log('test prop')
    //     setSelectedCharacter()
    // }
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
        <section className='border m-4 flex overflow-auto h-full rounded-md box-border'>
            {loading && <p>loading...</p>}
            {!loading && characterData?.length === 0 && <p className='errorMsg'>No character data available.</p>}
            {!loading && characterData && characterData?.length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-screen gap-2 items-center box-border p-2 pt-3 mb-3'>
                    {characterData?.map((character: Character) => (
                        <Card key={character.id}
                            className='hover:bg-slate-300'
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedCharacter(character)
                                // handleCharacterClick(character)
                            }}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 200, Width: 180, minHeight: 240, maxHeight: 235 }}>
                            <Link to={`/character/${character.id}`} ref={elementRef}><CardMedia
                                sx={{ margin: 1, maxHeight: 200, scale: 1, maxWidth: 120, borderRadius: '5%' }}
                                className='flex items-center'
                                component="img"
                                image={character.image}
                                alt={character.name}
                            />
                            </Link>
                            <CardContent sx={{ padding: 1 }} className='flex flex-col items-center'>
                                <Typography gutterBottom component="div" >
                                    {character.name}
                                </Typography>
                                <div className='flex  items-center divide-x divide-black'>
                                    <Typography variant="body2" color="text.secondary" sx={{ paddingRight: 1 }} >
                                        {character.species}
                                    </Typography>
                                    {/* <span className='flex items-center'>|</span> */}
                                    <Typography variant="body2" color="text.secondary" sx={{ paddingLeft: 1 }}>
                                        {character.origin.name}
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

export default PaintCharactersDetails
