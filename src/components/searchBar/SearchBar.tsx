import React, { useEffect } from 'react'
import adjustment_search from '../../assets/adjustments-search.svg'
import { useStore } from '../../store/useStore'
import GetSearchResult from '../getSearchResults/GEtSearchResult'

const SearchBar: React.FC = () => {
    // const searchQuery = useStore((state) => state.searchQuery)
    // const setSearchQuery = useStore((state) => state.setSearchQuery)
    const { results, searchQuery, setSearchQuery } = useStore()

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        if (searchQuery === '') {
            results === null
        }

    }
    // const [inputValue, setInputValue] = useState(searchQuery)

    const handleBlur = () => {
    // setInputValue('')
    // setSearchQuery('') // Esto restablecerá el valor del input a vacío
    }
    useEffect(() => {
        console.log(searchQuery) // Esto mostrará el valor actualizado de searchQuery
    }, [searchQuery])
    console.log(results)

    return (
        <div className="flex items-center bg-gray-400 rounded">
            <form className="flex rounded">
                <input
                    type="search"
                    className="rounded p-2"
                    placeholder="Search a character"
                    onChange={handleSearch}
                    // value={inputValue}
                    onBlur={handleBlur}
                />
                <img className="relative" src={adjustment_search} alt="search filter" />
            </form>
            {results !== null && (
                <GetSearchResult />
            )}
        </div>
    )
}

export default SearchBar
