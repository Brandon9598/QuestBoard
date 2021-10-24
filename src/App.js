import './App.css';
import BaseRouter from './routes';
import { BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <BaseRouter />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
