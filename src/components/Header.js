import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="Header">
      <h2>Home</h2>
      <h2><Link to="/about">About us</Link></h2>
      <h2>Contact Us</h2>
    </div>
  )
}

export default Header
