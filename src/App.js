
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Works from './pages/works';
import './css/main.css';
import AboutPage from './pages/about-page';
import Home from './pages/home';
import SideMenu from './components/side-menu';


function App() {
  const showMenu = () => {
    let menu = document.querySelector(".side-menu")
    if (menu.style.right !== "0px") {
      menu.setAttribute("style", "right: 0;");
    }
     else {
      menu.setAttribute("style", "right: -900px;");
    }
};
  return (
    <BrowserRouter>
       <div className="App">
         <Navbar show={showMenu}/>
         <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/my-works" element={<Works />} />
         <Route path="/about" element={<AboutPage />}/>
         </Routes>
         <SideMenu show={showMenu} />
    </div>
    </BrowserRouter>
 
  );
}

export default App;
