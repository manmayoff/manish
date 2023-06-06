import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import {Routes , Route, BrowserRouter } from "react-router-dom" ;

function App() {
  return (
    <div className="App">
      {/* <Home />  */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route exact path='/details' element={<Details/>}>
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
