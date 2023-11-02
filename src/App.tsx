
import { useEffect, useState } from 'react'
import GetEpisodesList from "./components/getEpisodesList/GetEpisodesList"
import { Character, Episode, Location } from 'rickmortyapi'
import EpisodeDetails from './components/elementsDetails/ElementsDetails'
import GetAllCharacters from './components/getAllCharacters/GetAllCharacters'
import { useStore } from './store/useStore'
// import GetSearchResult from './components/getSearchResults/GEtSearchResult'

type AppProps = {
  // searchResults: Character[]
}
type DetailsType = "Episode" | "Location" | "Character";

type DetailsObject = {
  type: DetailsType;
  details: Episode | Location | Character | null;
};

const App: React.FC<AppProps> = () => {
  const { url} = useStore()
  const initialDetails: DetailsObject = {
    type: "Episode", // Cambia el tipo según tus necesidades
    details: null, // Utiliza el valor de selectedDetailsType
  }
  const [selectedDetailsType, setSelectedDetailsType] = useState<Episode | Character | Location | null>(null)
  const [selectedDetails, setSelectedDetails] = useState<DetailsObject | null>(initialDetails)
  const handleEpisodeClick = (detailsType: Episode | Character | Location) => {

    if (detailsType && typeof detailsType === 'object') {
      setSelectedDetailsType(detailsType)
      // console.log(url)

      let newType: DetailsType = "Episode" // Valor predeterminado

      if (url === "character") {
        newType = "Character"
      } else if (url === "location") {
        newType = "Location"
      } else {
        newType = "Episode"
      }

      const newDetails: DetailsObject = {
        type: newType, // Cambia el tipo según tus necesidades
        details: detailsType
      }

      setSelectedDetails(newDetails)
    }
  }

  useEffect(() => {

  }, [selectedDetails, selectedDetailsType])

  const getEpisodesListDetails = selectedDetailsType === null ? <GetAllCharacters /> : <EpisodeDetails selectedDetails={selectedDetails} />

  return (
    <>

      <GetEpisodesList handleEpisodeClick={handleEpisodeClick} />

      {getEpisodesListDetails}


    </> 
  )
}

export default App


