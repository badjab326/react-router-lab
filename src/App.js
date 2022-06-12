import './App.css';
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home'
import Price from './pages/Price'
import Stocks from './pages/Stocks'


function App() {
  return (
    <div className="App">
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/price/:symbol" render={(renderProps) => {
          return <Price {...renderProps} />
        }} />
    </div>
  );
}

export default App;
