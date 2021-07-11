import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Singup } from './pages/Singup';
import { ProductDetail } from './pages/ProductDetail';
import { CreateProduct } from './pages/CreateProduct';
import { NavBar } from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { API } from './components/API/API';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>

        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/sing-up">
            <Singup/>
          </Route>
          <Route exact path="/product-detail">
            <ProductDetail/>
          </Route>
          <Route exact path="/create-product">
            <CreateProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
