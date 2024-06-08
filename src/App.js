import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import Body from './Components/Body/Body';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
         <Header/>
         <Body/>
         <Footer/>
    </div>
  );
}

export default App;
