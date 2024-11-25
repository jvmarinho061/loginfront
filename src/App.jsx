import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './Components/login/Login'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element ={<Login/>}/>
        {/* <Route path= '/cadastro' element ={<Cadastro/>}/> */}
        <Route path= '*' element ={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;