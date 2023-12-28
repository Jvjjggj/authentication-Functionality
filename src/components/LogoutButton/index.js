// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const logoutClick = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button onClick={logoutClick} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
