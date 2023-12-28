import {Component} from 'react'
import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <Header />
        <h1 className="home-heading">Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default Home
