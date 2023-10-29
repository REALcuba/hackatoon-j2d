import React from 'react'
// import { Location } from 'rickmortyapi'
import Thumnail from '../PaintCharactersDetails/PaintCharactersDetails'
// import { useStore } from '../../store/useStore'
const locationDetails: React.FC = () => {
    // const [locationArray] = useStore<Location[]>((state) => [state.locationArray]) >

    const charactersUrl: string[] = locationArray.residents || []
    return (
        <section className='border-2 m-3 p-2 w-full flex overflow-auto flex-col md:flex-row rounded-md box-border'>
            <div className='flex md:flex-col w-1/3 p-1'>
                <h2 className='text-center font-bold'>location Details</h2>
                <div className='border p-1 rounded '>

                    <p>ID: {locationArray?.id}</p>
                    <p>Name: {locationArray?.name}</p>
                    <p>Dimention: {locationArray?.dimension}</p>

                </div>
            </div>
            <div>
                <h2 className='text-center font-bold'>Residents</h2>
                <Thumnail charactersUrl={charactersUrl} />
            </div>
            {/* Agrega más datos del episodio según tus necesidades */}
        </section>
    )
}
export default locationDetails