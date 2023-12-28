// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Header />
        <h1 className="home-heading">About Route</h1>
        <LogoutButton />
      </div>
    )
  }
}
export default About
