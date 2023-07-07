import { Login } from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Menu from "./components/Menu";

function App() {
  
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Menu" element={<Menu/>}></Route>
     </Routes>
   
    </div>
  );
}

export default App;