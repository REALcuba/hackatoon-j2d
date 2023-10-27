
import { useState } from 'react'
// import './App.css'

import GetEpisodesList from "./components/getEpisodesList/GetEpisodesList"
import { Episode } from 'rickmortyapi'
import EpisodeDetails from './components/episodeDetails/EpisodeDetails'
import GetAllCharacters from './getAllCharacters/GetAllCharacters'

function App() {
  // const [error, loading, res] = useAxios({
  //   axiosInstance: axiosClient,
  //   method: 'get',
  //   url: '/episode',
  // }) const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null)

  const handleEpisodeClick = (episode: Episode) => {
    if (episode) {
      setSelectedEpisode(episode)
    }

  }

  return (
    <>
      <GetEpisodesList handleEpisodeClick={handleEpisodeClick} />
      {selectedEpisode !== null ? (
        <EpisodeDetails episode={selectedEpisode} />
        ) : (
        <GetAllCharacters />
      )}     
    </>
  )
}

export default App


