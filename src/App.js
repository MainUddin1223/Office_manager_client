import logo from './logo.svg';
import './App.css';
import Home from './compnants/Home/Home';
import Hello, { AppCOntextProvider } from './useContext/appContext';

function App() {
  return (
    <AppCOntextProvider>
      <Home></Home>
    </AppCOntextProvider>
  );
}

export default App;
