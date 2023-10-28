import React from 'react'
import { Episode } from 'rickmortyapi'
import Thumnail from '../PaintCharactersDetails/PaintCharactersDetails'
const EpisodeDetails: React.FC<{ episode: Episode }> = ({ episode }) => {
    const charactersUrl: string[] = episode.characters || []
    return (
        <section className='border-2 m-4 w-full flex overflow-auto flex-col md:flex-row rounded-md box-border'>
            <div className='flex md:flex-col w-1/3 p-1'>
                <h2 className='text-center font-bold'>Episode Details</h2>
                <div className='border p-1 rounded '>

                    <p>ID: {episode?.id}</p>
                    <p>Name: {episode?.name}</p>
                    <p>Air Date: {episode?.air_date}</p>
                    <h2>Characters</h2>
                </div>
            </div>
            <div>
                <Thumnail charactersUrl={charactersUrl} />
            </div>
            {/* Agrega más datos del episodio según tus necesidades */}
        </section>
    )
}
export default EpisodeDetails