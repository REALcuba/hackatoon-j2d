
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
            <label htmlFor="selecty" className="p-1 ml-2">Filter By:</label>
            <select id="selecty"
                className=" p-1 items-center bg-slate-300 gap-2 mt-3 ml-2 border rounded "
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