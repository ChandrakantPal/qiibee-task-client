import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ApolloProvider from './ApolloProvider'
import CustomerProfile from './pages/CustomerProfile'
import BrandProfile from './pages/BrandProfile'

const App = () => {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Switch>
          <Route path="brand" component={BrandProfile} />
          <Route path="/customer" component={CustomerProfile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
