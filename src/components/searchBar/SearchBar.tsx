import React from 'react'
import adjustment_search from '../../assets/adjustments-search.svg'
import { useStore } from '../../store/useStore'

const SearchBar: React.FC = () => {
    const searchQuery = useStore((state) => state.searchQuery)
    const setSearchQuery = useStore((state) => state.setSearchQuery)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        console.log(e.target.value)

    }

    return (
        <div className="flex items-center bg-gray-400 rounded">
            <form className="flex rounded">
                <input
                    type="search"
                    className="rounded p-2"
                    placeholder="Search a character"
                    onChange={handleSearch}
                    value={searchQuery}
                />
                <img className="relative" src={adjustment_search} alt="search filter" />
            </form>
        </div>
    )
}

export default SearchBar
