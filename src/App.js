import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";



function App() {
  return (
    <div className="container ">
      <div className="formulario row justify-content-center align-items-center">
        <Router>

          <Switch>
          
           <Login/>
            <Route
              path="./Login"
              component={Login}
              exact
            >
              
            </Route>
            
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;