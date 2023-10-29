import logo from "../../assets/rick&morty_logo.png"
import logo_name from '../../assets/logo_name.png'
import SearchBar from "../searchBar/SearchBar"
// import { Dispatch, SetStateAction } from "react"
type HeaderProps = {
  // setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  // handleSearch: () => void
}
const Header: React.FC<HeaderProps> = () => {
  const handleLogoClick = () => {
    console.log('clicked')
    window.location.reload()

  }
  return (
    <header className="sticky top-0 ">
      <nav className="flex justify-around items-center bg-slate-600 max-h10">
        <img className="w-20 h-20 ps-2" src={logo} alt="Rick and Morty logo" onClick={handleLogoClick} />
        <img src={logo_name} className="hidden md:flex h-20 me-2" alt="Rick and Morty name logo" onClick={handleLogoClick} />
        <SearchBar  />
      </nav>
    </header>
  )
}

export default Header