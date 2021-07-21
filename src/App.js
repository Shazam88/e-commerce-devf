import './App.css'
import { Home } from './pages/Home';
import { Login } from './components/Login/login'
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
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login}/>
          <Route exact path="/sign-up" component={Signup}/>

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
