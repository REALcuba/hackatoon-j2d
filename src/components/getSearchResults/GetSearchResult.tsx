import { useEffect, useRef } from 'react'
import { useStore } from '../../store/useStore'  // Asegúrate de importar correctamente el store
// import { Character } from 'rickmortyapi'
import { Link } from 'react-router-dom'

function GetSearchResult() {
    const { setSelectedCharacter, searchQuery, search, results } = useStore()
    const elementRef = useRef<HTMLAnchorElement | null>(null)
    // const handleCharacterClick = (character: Character) => {
    //     console.log(character)

    // }
    useEffect(() => {
        // Llama a la función de búsqueda cuando searchQuery cambie
        search()
    }, [search, searchQuery])
    console.log(searchQuery)
    console.log(results)
    return (
        <div className='overflow-auto max-w-32 dark:text-slate-800'>
            <ul className='overflow-auto h-32 '>
                {results.map((character) => (
                    <li key={character.id} className='hover:bg-gray-400 cursor-pointer'
                        onClick={(e) => {
                            e.stopPropagation()
                            setSelectedCharacter(character)
                            // handleCharacterClick(character)
                        }}>
                        <Link to={`/character/${character.id}`} ref={elementRef}>
                            {character.name}
                        </Link></li>
                ))}
            </ul>
        </div>
    )
}

export default GetSearchResult