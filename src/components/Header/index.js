// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div id="homeId">
        <Link className="home-link" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    )
  }
}
export default Header
