import './App.css';
import BaseRouter from './routes';
import CustomLayout from './Pages/Layout';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>

    </div>
  );
}

export default App;
