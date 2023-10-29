import React, { useEffect, useRef, useState } from 'react'
import adjustment_search from '../../assets/adjustments-search.svg'
import { useStore } from '../../store/useStore'
import GetSearchResult from '../getSearchResults/GetSearchResult'

const SearchBar: React.FC = () => {
    // const searchQuery = useStore((state) => state.searchQuery)
    // const setSearchQuery = useStore((state) => state.setSearchQuery)
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

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setInputValue(event.target.value)
    // }

    const handleClickOutside = (e: React.MouseEvent) => {
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
    console.log(results)
    const resultClassName = searchQuery.length > 0 ? 'absolute z-10 my-2 p-2 bg-gray-200 h-32 rounded shadow-lg' : "hidden" 
    return (
        <div className='a'>
            <div className="flex items-center flex-col  rounded max-h-8">
                <form className="flex rounded-l">
                    <input
                        ref={inputRef}
                    type="search"
                        className="rounded-l p-2"
                    placeholder="Search a character"
                    onChange={handleSearch}
                        value={inputValue}
                        onClick={handleClickOutside}

                    />
                    <img className="relative bg-white rounded-r" src={adjustment_search} alt="search filter" />
            </form>
            </div>
            {results !== null && (
                <div className={resultClassName}>
                <GetSearchResult />
                </div>
            )}
        </div>
    )
}

export default SearchBar
