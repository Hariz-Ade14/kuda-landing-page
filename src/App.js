import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
         <Header/>
         <Body/>
    </div>
  );
}

export default App;