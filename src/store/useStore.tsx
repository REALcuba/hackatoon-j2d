import { create } from 'zustand'
// import { devtools, persist } from 'zustand/middleware'
import { axiosClient } from '../api/axiosclient'
import { Character, Location } from 'rickmortyapi'
// import type { } from '@redux-devtools/extension' // required for devtools typing

interface StoreState {
    url: string;
    results: Character[];
    searchQuery: string;
    locationArray: Location[];
    selectedCharacter: Character | null;
    darkMode: boolean;
    setSearchQuery: (query: string) => void;
    search: () => void;
    setUrl: (newUrl: string) => void;
    setSelectedCharacter: (character: Character) => void;
    toggleDarkMode: () => void;
}

export const useStore = create<StoreState>()(

            (set) => ({
        url: 'episode',
        results: [],
        searchQuery: '',
        locationArray: [], // Agrega una propiedad para la consulta de búsqueda
        selectedCharacter: null,
        darkMode: false,
        toggleDarkMode: () => set((state) => ({ ...state, darkMode: !state.darkMode })),
        setSearchQuery: (query) => set({ searchQuery: query.toLowerCase() }), // Función para actualizar la consulta de búsqueda
        // setLocation: (locations: Location[]) => set({ locationArray: locations }),
        // console.log(searchQuery);
        setSelectedCharacter: (character: Character | null) => {
            set({ selectedCharacter: character })
        },

        setUrl: (newUrl) => set({ url: newUrl }),
        search: async () => {
                    try {
                        const state = useStore.getState()
                        if (state.searchQuery === '') {
                            useStore.setState((prevState) => ({
                                ...prevState,
                                results: [],
                            }))
                        } else {
                        const response = await axiosClient.get(
                            `https://rickandmortyapi.com/api/character/?name=${state.searchQuery}`
                        )
                            console.log('API response:', response.data.results)
                        // Actualiza los resultados en el store
                            const updatedResults = response.data.results

                            useStore.setState((prevState) => ({
                                ...prevState,
                                results: updatedResults,
                            }))
                        }
                        console.log(state)
                    } catch (error) {
                        console.error('Error en la búsqueda de personajes:', error)
                    }
                },
            }),

)