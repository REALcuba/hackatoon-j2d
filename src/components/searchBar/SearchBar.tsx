import React, { useEffect, useRef, useState } from 'react'
import adjustment_search from '../../assets/adjustments-search.svg'
// import listSearch from "../../assets/list-search.svg"
// 
import { useStore } from '../../store/useStore'
import GetSearchResult from '../getSearchResults/GetSearchResult'

const SearchBar: React.FC = () => {
    const [showSearch, setShowISearch] = useState(false)

    const [inputValue, setInputValue] = useState('')
    const { results, searchQuery, setSearchQuery } = useStore()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchQuery(e.target.value)
        setInputValue(e.target.value)

        if (searchQuery === '') {
            results === null
        }

    }

    const handleSearchIconClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        console.log("search")
        setShowISearch(!showSearch)
    }

    const handleClickOutside = (e: MouseEvent) => {
        e.preventDefault()
        if (inputRef.current && e.target instanceof Node && !inputRef.current.contains(e.target)) {
            setSearchQuery('')

            setInputValue('') // Limpia el valor solo si se hace clic fuera del input
        }
        console.log('test event')

    }

    useEffect(() => {

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, setSearchQuery])
    const resultClassName = searchQuery.length > 0 ? 'absolute z-10 my-2 p-2 bg-slate-600  rounded shadow-lg' : "hidden" 
    return (
        <label htmlFor="searchbox">
            <div className='w-56'>
                <div className="relative rounded">
                    <input
                        value={inputValue}
                        ref={inputRef}
                        onChange={handleSearch}
                    type="search"
                        className={`md:w-56 bg-slate-600 md:bg-white transition-all ease-in-out duration-500  ${showSearch ? 'w-56 bg-white' : 'w-0 bg-slate-600 md:bg-white md:w-56 '} rounded p-2 pr-0 pl-2`}
                        placeholder="Search a character"
                    />
                    <svg
                        className={`w-6 h-6 mr-1 absolute rounded-r right-2 top-1/2 transform -translate-y-1/2 cursor-pointer '
                        `}
                        onClick={handleSearchIconClick}
                    >
                        <image href={adjustment_search} />
                    </svg>
                </div>
            </div>
            {results !== null && (
                <div className={resultClassName}>
                <GetSearchResult />
                </div>
            )}
        </label>
    )
}

export default SearchBar
