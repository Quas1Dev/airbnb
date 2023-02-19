import logo from '../images/airbnb-logo.png'
import banner from '../images/composing-pics.png'

export default function Header() {
  return (
    <header className="page-header">
      {/* Navbar*/}
      <nav className="page-header--nav">
        <img src={logo} className="nav--logo"/>
      </nav>

      {/* Hero component */}
      <div className="page-header--composing_width">
        <div className="page-header--composing_height">
          <img src={banner} className="composing_height--cocomposing"/>
        </div>
      </div>
    </header>
  )
}
