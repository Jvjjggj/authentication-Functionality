import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </>
)

export default App
