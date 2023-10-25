
// import { useState } from 'react'
// import './App.css'

import GetEpisodesList from "./components/getEpisodesList/getEpisodesList"


function App() {
  // const [error, loading, res] = useAxios({
  //   axiosInstance: axiosClient,
  //   method: 'get',
  //   url: '/episode',
  // })

  return (
    <>
      <GetEpisodesList />
    </>
  )
}

export default App
