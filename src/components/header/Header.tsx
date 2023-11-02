import logo from "../../assets/rick&morty_logo.png"
import logo_name from '../../assets/logo_name.png'
import sun from "../../assets/sun.svg"
import sunOff from "../../assets/sun-off.svg"
import SearchBar from "../searchBar/SearchBar"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../store/useStore"
type HeaderProps = {
  // toggleDarkMode: () => void
}
const Header: React.FC<HeaderProps> = () => {
  const { darkMode, toggleDarkMode } = useStore()
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/hackatoon-j2d')
  }
  return (
    <header className="sticky top-0 max-w-screen">
      <nav className="flex justify-between items-center bg-slate-600 max-h-20">
        <img className="w-20 h-20 ps-2" src={logo} alt="Rick and Morty logo" onClick={handleLogoClick} />
        <img src={logo_name} className="hidden md:flex h-20 me-2" alt="Rick and Morty name logo" onClick={handleLogoClick} />
        <div className={`flex  gap-3  max-h-10 `}>
        <SearchBar  />
          <svg width="40" height="40" className=" pt-2" onClick={toggleDarkMode} >
            <image className="" href={darkMode ? sun : sunOff} />
          </svg>
        </div>
      
      </nav>
    </header>
  )
}

export default Header