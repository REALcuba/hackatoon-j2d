import logo from "../../assets/rick&morty_logo.png"
import logo_name from '../../assets/logo_name.png'
const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between items-center bg-slate-600">
        <img className="w-20 h-20 ps-2" src={logo} alt="" />
        <img src={logo_name}  className=" h-20 me-2"alt="" />
      </nav>
    </header>
  )
}

export default Header