
import { useEffect, useState } from 'react'
import GetEpisodesList from "./components/getEpisodesList/GetEpisodesList"
import { Character, Episode, Location } from 'rickmortyapi'
import EpisodeDetails from './components/episodeDetails/EpisodeDetails'
import GetAllCharacters from './components/getAllCharacters/GetAllCharacters'
import { useStore } from './store/useStore'

type AppProps = {
  // searchResults: Character[]
}
type DetailsType = "Episode" | "Location" | "Character";

type DetailsObject = {
  type: DetailsType;
  details: Episode | Location | Character | null;
};

const App: React.FC<AppProps> = () => {
  const { url } = useStore()
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
  // console.log(selectedDetailsType)


  // setCharacterData(searchResults)
  return (
    <>
      <GetEpisodesList handleEpisodeClick={handleEpisodeClick} />
      {selectedDetailsType !== null ? (
        <EpisodeDetails selectedDetails={selectedDetails} />
      ) : 
        <GetAllCharacters />

      }
    </>
  )
}
// to do
{/* <Thumnail characterData={result} />    */ }
export default App


