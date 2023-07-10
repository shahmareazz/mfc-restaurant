import "./App.css"
import LoginForm from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home"
function App() {
  
  return (
    <>
     <Header />
     <Routes>
     
      <Route path="/Login" element={<LoginForm />}></Route>
      <Route path="/Menu" element={<Menu/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
     </Routes>

     <Footer />
   
    </>
   

  );  
}

export default App;