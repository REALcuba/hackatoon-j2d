import { useEffect } from 'react'
import { useStore } from '../../store/useStore'  // Asegúrate de importar correctamente el store

function GetSearchResult() {
    const { searchQuery, search, results } = useStore()
    
    useEffect(() => {
        // Llama a la función de búsqueda cuando searchQuery cambie
        search()
    }, [search, searchQuery])
    console.log(searchQuery)
    console.log(results)
    return (
        <div className='h-16 overflow-auto w-16'>
           
            <ul >
                {results.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default GetSearchResult