import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
