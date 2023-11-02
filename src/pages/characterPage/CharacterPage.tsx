// import PaintCharactersDetails from "../../components/PaintCharactersDetails/PaintCharactersDetails"

import { useNavigate } from "react-router-dom"
import { useStore } from "../../store/useStore"

const CharacterPage = () => {
    const { selectedCharacter } = useStore()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/hackatoon-j2d')
    }
    return (
        <div className="mt-3 w-full h-full">
            <section className="border-2 m-3 p-2  h-86 justify-evenly items-center align-center mt-3 flex flex-col md:flex-row ">
                <div className="border-2 m-3 p-2 w-full h-86 justify-evenly items-center flex flex-col md:flex-row ">
                    <article className="rounded border space-x-3 m-3 p-2 md:h-96 md:w-1/3 ">
                        <p><span className="font-bold">Name:</span> {selectedCharacter?.name}</p>
                        <p><span className="font-bold">Gender:</span> {selectedCharacter?.gender}</p>
                        <p><span className="font-bold">Species:</span> {selectedCharacter?.species}</p>
                        <p><span className="font-bold">Origin:</span> {selectedCharacter?.origin?.name} </p>
                        <p><span className="font-bold">Status:</span>  {selectedCharacter?.status} </p>
                        <p><span className="font-bold">Type: </span> {selectedCharacter?.type ? selectedCharacter?.type : "Unknown"} </p>
            </article>
                    <picture className="w-2/3 mt-3 flex justify-center rounded ">
                        <img className="rounded-lg hover:shadow-2xl" src={selectedCharacter?.image} alt={selectedCharacter?.name} />
            </picture>
                </div>
        </section>
            <div className="flex justify-center">
                <button type="button"
                    className="bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 m-4 rounded"
                    onClick={handleClick}>Go Back</button>
            </div>
        </div>
    )
}

export default CharacterPage