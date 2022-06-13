import './App.css';
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Home from './pages/Home'
import Price from './pages/Price'
import Stocks from './pages/Stocks'
import StockData from './components/StocksData'


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
        <Route exact path="/stocks">
          <Stocks />
        </Route>
        <Route path="/stocks/:symbol" render={props => <Price stockData={StockData} {...props} />
        } />
    </div>
  );
}

export default App;
