import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Welcome from './components/welcome';
import Page from './components/page';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
      </Switch>
    </>
  );
}

export default App;
