import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import RegisterProducts from './pages/registerProducts';
import './styles/global.css';
import Tests from './pages/tests';



const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/tests"component={Tests} />
      <Route path="/registerProduct"component={RegisterProducts} />
    </Switch>
   </BrowserRouter> 
   
  );
}

export default App;

