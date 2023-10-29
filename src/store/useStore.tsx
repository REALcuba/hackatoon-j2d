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
    setSearchQuery: (query: string) => void;
    // setLocation: (location: []) => Location[];
    search: () => void;
    setUrl: (newUrl: string) => void;
}

export const useStore = create<StoreState>()(
    // devtools(
    //     persist(
            (set) => ({
        url: 'episode',
                results: [],
        searchQuery: '',
        locationArray: [], // Agrega una propiedad para la consulta de búsqueda
                setSearchQuery: (query) => set({ searchQuery: query }), // Función para actualizar la consulta de búsqueda
        // setLocation: (locations: Location[]) => set({ locationArray: locations }),
        setUrl: (newUrl) => set({ url: newUrl }),
                search: async () => {
                    try {
                        const state = useStore.getState()
                        const response = await axiosClient.get(
                            `https://rickandmortyapi.com/api/character/?name=${state.searchQuery}`
                        )

                        // Actualiza los resultados en el store
                        useStore.setState(() => ({
                            results: response.data.results,


                        }))
                        // console.log(state)
                    } catch (error) {
                        console.error('Error en la búsqueda de personajes:', error)
                    }
                },
            }),
    //         {
    //             name: 'angel-storage',
    //         }
    //     )
    // )
)