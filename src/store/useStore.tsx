import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { axiosClient } from '../api/axiosclient'
import { Character } from 'rickmortyapi'
// import type { } from '@redux-devtools/extension' // required for devtools typing

interface StoreState {
    results: Character[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    search: () => void;
}

export const useStore = create<StoreState>()(
    devtools(
        persist(
            (set) => ({
                results: [],
                searchQuery: '', // Agrega una propiedad para la consulta de búsqueda
                setSearchQuery: (query) => set({ searchQuery: query }), // Función para actualizar la consulta de búsqueda
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
            {
                name: 'angel-storage',
            }
        )
    )
)