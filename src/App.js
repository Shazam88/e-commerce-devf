import { Home } from './pages/Home';
import { Login } from './components/login/login'
import { Signup } from './components/SignUp/signup';
import { Products } from './components/Products/Products';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { CreateProduct } from './pages/CreateProduct';
import { NavBar } from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { API } from './components/API/API';
import { Footer } from './components/Footer/Footer';

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
          <Route exact path="/sign-up">
            <Signup/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <Route exact path="/product-detail">
            <ProductDetail/>
          </Route>
          <Route exact path="/create-product">
            <CreateProduct/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
