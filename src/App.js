
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Works from './pages/works';
import './css/main.css';
import AboutPage from './pages/about-page';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <Navbar />
         <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/my-works" element={<Works />} />
         <Route path="/about" element={<AboutPage />}/>
         </Routes>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
