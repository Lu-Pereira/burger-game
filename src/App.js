import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import cozinha from './pages/cozinha';
import salao from './pages/salao';

export const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path="/cozinha" component={cozinha}/>
      <Route path="/salao" component={salao}/>
    </Switch>
  </BrowserRouter>
  )
};

export default App;



