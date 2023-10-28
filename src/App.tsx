
import { useState } from 'react'
// import './App.css'

import GetEpisodesList from "./components/getEpisodesList/GetEpisodesList"
import { Character, Episode } from 'rickmortyapi'
import EpisodeDetails from './components/episodeDetails/EpisodeDetails'
import GetAllCharacters from './components/getAllCharacters/GetAllCharacters'
// import Thumnail from './components/Thumnail/Thumnail'

type AppProps = {
  // searchResults: Character[]
}
const App: React.FC<AppProps> = () => {

  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)
  // const [characterData, setCharacterData] = useState<Character[]>()
  const [result] = useState<Character[]>([])
  // const [loading, setLoading] = useState(true)
  const handleEpisodeClick = (episode: Episode) => {
    if (episode) {
      setSelectedEpisode(episode)
    }

  }
  // setCharacterData(searchResults)
  return (
    <>

      <GetEpisodesList handleEpisodeClick={handleEpisodeClick} />
      {selectedEpisode !== null ? (

        <EpisodeDetails episode={selectedEpisode} />
        ) : (
        <GetAllCharacters />
      )}  
      {/* <Thumnail characterData={result} />    */}
    </>
  )
}

export default App


