import "./App.css"
import logo from "";
import { Login } from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Menu from "./components/Menu";
import About from "./components/About";
function App() {
  
  return (
    <>
     <Header />
     <Routes>
     
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Menu" element={<Menu/>}></Route>
      <Route path="/About" element={<About/>}></Route>
     </Routes>
   
    </>
   

  );  
}

export default App;