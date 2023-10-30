import logo from "../../assets/rick&morty_logo.png"
import logo_name from '../../assets/logo_name.png'
import sun from "../../assets/sun.svg"
import sunOff from "../../assets/sun-off.svg"
import SearchBar from "../searchBar/SearchBar"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../store/useStore"
// import { Dispatch, SetStateAction } from "react"
type HeaderProps = {
  // setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  // handleSearch: () => void
}
const Header: React.FC<HeaderProps> = () => {
  const { darkMode, toggleDarkMode } = useStore()
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <header className="sticky top-0 ">
      <nav className="flex justify-around items-center bg-slate-600 max-h10">
        <img className="w-20 h-20 ps-2" src={logo} alt="Rick and Morty logo" onClick={handleLogoClick} />
        <img src={logo_name} className="hidden md:flex h-20 me-2" alt="Rick and Morty name logo" onClick={handleLogoClick} />
        <div className="flex justify-between items-center gap-4">
        <SearchBar  />
        <button className=" mt-2 " onClick={toggleDarkMode} >
          <img src={darkMode ? sun : sunOff} alt="" />
        </button>
        </div>
      
      </nav>
    </header>
  )
}

export default Header