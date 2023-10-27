import React from 'react'
import { Episode } from 'rickmortyapi'
import Thumnail from '../Thumnail/Thumnail'
const EpisodeDetails: React.FC<{ episode: Episode }> = ({ episode }) => {
    const charactersUrl: string[] = episode.characters || []
    return (
        <section className='max-w-screen'>
            <h2>Episode Details</h2>
            <p>ID: {episode?.id}</p>
            <p>Name: {episode?.name}</p>
            <p>Air Date: {episode?.air_date}</p>
            <h2>Characters</h2>
            <div>
                <Thumnail charactersUrl={charactersUrl} />
            </div>
            {/* Agrega más datos del episodio según tus necesidades */}
        </section>
    )
}
export default EpisodeDetails