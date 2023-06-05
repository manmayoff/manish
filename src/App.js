import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import {Routes , Route } from "react-router-dom" ;

function App() {
  return (
    <div className="App">
      {/* <Home />  */}
      <Routes>
        <Route exact path='/' element={<Home/>}>
          {/* <Home /> */}
        </Route>
        <Route exact path='/details' element={<Details/>}>
          {/* <Details /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
