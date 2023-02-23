import logo from '../images/logo192.png'

const Header = () => {
  return(
    <div className="py-3 pl-2" style={{borderBottom: "1px solid #7777"}}>
      <img src={logo} style={{height: "35px", verticalAlign: "top"}} alt="React logo"></img>
      <span className="h2 pt-4 m-2 text-white-50">React - Countopedia</span>
    </div>
  )
}

export default Header;