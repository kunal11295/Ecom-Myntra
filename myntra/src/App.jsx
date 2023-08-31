import './App.css';
import {Routes,Route} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Addproduct from './Components/Addproduct';
import Multiproduct from './Components/Multiproduct';
import Singleproduct from './Components/Singleproduct';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
     <Routes>
    <Route exact path="/register" element={<Register/>} />
    <Route exact path='/login' element ={<Login/>} />
    <Route exact path='/homepage' element ={<Homepage/>} />
    <Route exact path='/addproduct' element ={<Addproduct/>} />
    <Route exact path='/Multiproduct' element ={<Multiproduct/>} />
    <Route exact path='/Singleproduct' element ={<Singleproduct/>} />
    <Route exact path='/Cart' element ={<Cart/>} />
     </Routes>
    </div>
  );
}

export default App;
