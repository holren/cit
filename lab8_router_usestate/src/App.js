import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage.jsx'
import SignInPage from './components/SignInPage.jsx'
import ProfilePage from './components/ProfilePage.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"><MainPage/></Route>
          <Route exact path="/sign-in"><SignInPage/></Route>
          <Route exact path="/profile"><ProfilePage/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
