// import React from 'react'
import { Character, Episode, Location } from 'rickmortyapi'
import Thumnail from '../PaintCharactersDetails/PaintCharactersDetails'

type DetailsType = "Episode" | "Location" | "Character";

type DetailsObject = {
    type: DetailsType;
    details: Episode | Character | Location | null;
};

type selectedDetails = {
    selectedDetails: DetailsObject | null;
};

const renderEpisodeDetails = (episode: Episode) => (
    <section className='border-2 m-3 p-2 w-full flex overflow-auto flex-col md:flex-row rounded-md box-border'>
        <div className='flex md:flex-col w-1/3 p-1'>
            <h2 className='text-center font-bold'>Episode Details</h2>
            <div className='border p-1 rounded'>
                <p>ID: {episode.id}</p>
                <p>Name: {episode.name}</p>
                <p>Air Date: {episode.created}</p>
            </div>
        </div>
        <div>
            <h2 className='text-center font-bold'>Characters</h2>
            <Thumnail charactersUrl={episode.characters} />
        </div>
    </section>
)

const renderLocationDetails = (location: Location) => (
    <section className='border-2 m-3 p-2 w-full flex overflow-auto flex-col md:flex-row rounded-md box-border'>
        <div className='flex md:flex-col w-1/3 p-1'>
            <h2 className='text-center font-bold'>Location Details</h2>
            <div className='border p-1 rounded'>
                <p>Type: {location.type}</p>
                <p>Name: {location.name}</p>
                <p>Dimension: {location.dimension}</p>
            </div>
        </div>
        <div>
            <h2 className='text-center font-bold'>Characters</h2>
            <Thumnail charactersUrl={location.residents} />
        </div>
    </section>
)

const renderCharacterDetails = (character: Character) => (
    <section className='border-2 m-3 p-2 w-full gap-10 flex overflow-auto flex-col md:flex-row rounded-md box-border'>
        <div className='flex md:flex-col w-1/3 p-1'>
            <h2 className='text-center font-bold'>Character Details</h2>
            <div className='border p-1 rounded'>
                <p>Name: {character.name}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
            </div>
        </div>
        <div>
            <h2 className='text-center font-bold'>Characters</h2>
            <picture>
                <img  className='rounded-lg hover:shadow-lg' src={character.image} alt={character.name} />
            </picture>
        </div>
    </section>
)

const EpisodeDetails = (selectedDetails: selectedDetails) => {
    //check episode type and render details

    switch (selectedDetails?.selectedDetails?.type) {
        case "Episode":
            return renderEpisodeDetails(selectedDetails.selectedDetails.details as Episode)
        case "Location":
            return renderLocationDetails(selectedDetails.selectedDetails.details as Location)
        case "Character":
            return renderCharacterDetails(selectedDetails.selectedDetails.details as Character)
      default:
          return null
  }
}

export default EpisodeDetails
