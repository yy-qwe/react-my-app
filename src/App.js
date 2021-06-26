/*
 * @Author: your name
 * @Date: 2021-06-26 10:03:10
 * @LastEditTime: 2021-06-26 15:53:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react\my-app\src\App.js
 */
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import User from "./views/User";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/about" component={About}>

            </Route>
            <Route path="/user/:id" exact component={User}>

            </Route>
            <Route path="/user" exact component={User}>

            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
