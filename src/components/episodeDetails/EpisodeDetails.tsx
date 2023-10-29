// import React from 'react'
import { Character, Episode, Location } from 'rickmortyapi'
// import Thumnail from '../PaintCharactersDetails/PaintCharactersDetails'

type DetailsType = "Episode" | "Location" | "Character";

type DetailsObject = {
    type: DetailsType;
    details: Episode | Character | Location | null;
};
const EpisodeDetails = (selectedDetails: DetailsObject ) => {
    //check episode type Episode
    switch (selectedDetails?.type) {
        case "Episode":
            // `details.details` ahora tiene el tipo `Episode`
            return (
                <section className='border-2 m-3 p-2 w-full flex overflow-auto flex-col md:flex-row rounded-md box-border'>
                    <div className='flex md:flex-col w-1/3 p-1'>
                        <h2 className='text-center font-bold'>Episode Details</h2>
                        <div className='border p-1 rounded '>

                            <p>ID: {selectedDetails.details?.id}</p>
                            <p>Name: {selectedDetails.details?.name}</p>
                            <p>Air Date: {selectedDetails.details?.created}</p>

                        </div>
                    </div>
                    <div>
                        <h2 className='text-center font-bold'>Characters</h2>
                        {/* <Thumnail charactersUrl={details} /> */}
                    </div>
                    {/* Agrega más datos del episodio según tus necesidades */}
                </section>
            )
        case "Location":
            // `details.details` ahora tiene el tipo `Location`
            return (
                <div>
                    <h2>{selectedDetails.details?.name}</h2>
                    {/* Renderizar propiedades específicas de Location */}
                </div>
            )
        case "Character":
            // `details.details` ahora tiene el tipo `Character`
            return (
                <div>
                    <h2>{selectedDetails.details?.name}</h2>
                    {/* Renderizar propiedades específicas de Character */}
                </div>
            )
        default:
            return null
    }
    // const isEpisode = (episode: Episode | Location | Character): typeof episode => {
    //     return episode
    // }
    // if(episode=== Location){
    //     return <LocationDetails />
    // }
    // const charactersUrl: string[] = isEpisode.characters || []
    // return (
    //     <section className='border-2 m-3 p-2 w-full flex overflow-auto flex-col md:flex-row rounded-md box-border'>
    //         <div className='flex md:flex-col w-1/3 p-1'>
    //             <h2 className='text-center font-bold'>Episode Details</h2>
    //             <div className='border p-1 rounded '>

    //                 <p>ID: {episode?.id}</p>
    //                 <p>Name: {episode?.name}</p>
    //                 <p>Air Date: {episode?.air_date}</p>

    //             </div>
    //         </div>
    //         <div>
    //             <h2 className='text-center font-bold'>Characters</h2>
    //             <Thumnail charactersUrl={charactersUrl} />
    //         </div>
    //         {/* Agrega más datos del episodio según tus necesidades */}
    //     </section>
    // )
}
export default EpisodeDetails