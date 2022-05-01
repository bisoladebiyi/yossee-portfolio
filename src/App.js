
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Works from './pages/works';
import './css/main.css';
import AboutPage from './pages/about-page';
import Home from './pages/home';
import SideMenu from './components/side-menu';
import smoothscroll from 'smoothscroll-polyfill';
import OmegaBakery from './pages/omega-bakery';
import Innovation from './pages/innovation-landing';


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
         <Route path="/omega-bakery" element={<OmegaBakery />}/>
         <Route path="/innovation-landing" element={<Innovation />}/>
         </Routes>
         <SideMenu show={showMenu} />
    </div>
    </BrowserRouter>
 
  );
}

smoothscroll.polyfill();
export default App;
