import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
// import { useEffect } from "react"
// import { axiosClient } from "../api/axiosclient"
// import GetEpisodesList from "../components/getEpisodesList/GetEpisodesList"
// import { useState } from "react"
// import App from "../App"
// import App from "../App"

export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {
    // const [searchQuery, setSearchQuery] = useState<string>('')
    // const [results, setResults] = useState([])
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(searchQuery)
    //     setSearchQuery(e.target.value)
    // }
    // const handleSearch = async () => {
    //     try {
    //         // Realiza una solicitud a la API de Rick and Morty para buscar personajes con el nombre que coincida con la consulta
    //         const response = await axiosClient.get(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)

    //         // Actualiza los resultados con los personajes encontrados
    //         setResults(response.data.results)
    //     } catch (error) {
    //         console.error('Error en la búsqueda de personajes:', error)
    //     }
    // }
    // console.log(results)

    // useEffect(() => {
    //     // Realiza la búsqueda cada vez que cambia la consulta
    //     if (searchQuery === undefined) {
    //         return
    //     } else {

    //         handleSearch()
    //     }
    //     // eslint-disable-next-line
    // }, [searchQuery])
    return (
        <div className="root-layout max-h-full ">
            <Header  />
            <div className="flex justify-around">

                {/* <GetEpisodesList handleEpisodeClick={handleEpisodeClick} /> */}
                <main className="  flex max-h-screen min-w-full">
                    <Outlet />
                    {/* <Routes>
                        <Route path="/*" element={<App searchResults={results} />} />
                        {/* Resto de tus rutas */}
                    {/* </Routes> */} 
            </main>
            </div>
        </div>
    )
}

export default RootLayout