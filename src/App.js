import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

import component from "./component/parent"


function App() {
  return (
    <Router>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={component} />
         
          {/* <Route component={Error} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;