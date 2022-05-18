
import './App.css';
import { Navbar } from "./Navbar.js"
import { Contant } from "./Contant.js"
import {Fotter} from "./Fotter.js"
import{About} from "./About.js"
import {Gallery} from "./mycomponents/Gallery.js"
import {TESTIMONIALS} from "./mycomponents/TESTIMONIALS.js"
import {Services} from "./mycomponents/Services.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
     <Navbar/> 
     < Routes>
          <Route exact path="/" element={ <Contant/>}></Route>
          <Route exact path="/about" element={ <About/>}></Route>
          <Route exact path="/Gallery" element={ <Gallery/>}></Route>
          <Route exact path="/TESTIMONIALS" element={<TESTIMONIALS/>}></Route>
          <Route exact path="/Services" element={<Services/>}></Route>
        </ Routes>
    
     <Fotter/>
     
     </Router>
    </div>
  );
}

export default App;
