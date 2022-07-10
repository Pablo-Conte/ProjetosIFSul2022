//import HomePage from './pages/HomePage';
import {RegisterPage, LoginPage} from './pages/index';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
