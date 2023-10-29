
type ListFilterProps = {
    setUrl: (url: string) => void
    setPage: (page: number) => void
}

const ListFilter: React.FC<ListFilterProps> = ({ setUrl, setPage }) => {


    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setUrl(e.target.value.toLowerCase())
        setPage(1)
    }


    return (
        <form>
            <label htmlFor="selecty" className="p-1">Filter By:</label>
            <select id="selecty"
                className="flex-shrink p-1 items-center w-2/3 justify-center gap-2 mt-1 border rounded "
                onChange={handleFilterChange}
            >
                <option className=" rounded-sm p-1 px-2 box-border hover:bg-green-700 hover:border">Episode</option>
                <option className=" rounded-sm p-1 px-2 box-border hover:bg-green-700 hover:border">Character</option>
                <option className=" rounded-sm p-1 px-2 box-border hover:bg-green-700 hover:border">Location</option>
            </select>
        </form>

    )
}

export default ListFilter