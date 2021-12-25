import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './containers/HomePage';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ProductListPage from './containers/productListPage';
import ProductDetailsPage from './containers/productDetailsPage';
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/CheckoutPage';
import OrderPage from './containers/OrderPage';
import OrderDetailsPage from './containers/OderDetailsPage';
import ProductPage from './containers/productPage'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,updateCart } from './actions';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  },[auth.authenticate])
  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/" exact component={HomePage}/>
          <Route path='/cart' component={CartPage} />
          <Route path="/search" component={ProductPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route path="/:productSlug/:productId/p"  component={ProductDetailsPage}/>
          <Route path="/:slug"  component={ProductListPage}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
