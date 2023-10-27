import logo from "../../assets/rick&morty_logo.png"
const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between items-center bg-slate-600">
        <img className="w-20 h-20 ps-2" src={logo} alt="" />
        <ul>
          <li>esto</li>
          <li>tiene</li>
          <li>un </li>
          <li>layout</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header