import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import Cardapio from "./Components/Cardapio/Cardapio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/comida' element={<Cardapio />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;