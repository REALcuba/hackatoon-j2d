// import PaintCharactersDetails from "../../components/PaintCharactersDetails/PaintCharactersDetails"

import { useStore } from "../../store/useStore"

const CharacterPage = () => {
    const { selectedCharacter } = useStore()
    return (
        <section className="border-2 m-3 p-2 w-full h-86 justify-evenly items-center flex flex-col md:flex-row ">

            <article className="rounded border space-x-3 h-96 w-1/3 ">
                <p>Name: {selectedCharacter?.name}</p>
                <p>Gender: {selectedCharacter?.gender}</p>
                <p>Species: {selectedCharacter?.species}</p>
                <p>Origin: {selectedCharacter?.origin?.name} </p>
            </article>
            <picture className="w-2/3 flex justify-center rounded">
                <img className="rounded-lg" src={selectedCharacter?.image} alt={selectedCharacter?.name} />
            </picture>

        </section>
    )
}

export default CharacterPage