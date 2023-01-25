import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import NewListing from './views/NewListing'
import EditListing from './views/EditListing'
import Register from './views/Register'
import SignIn from './views/SignIn'
import marketplace from './controllers/marketplace'

function App() {
  return ( 
          <BrowserRouter>     
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sign-In" element={<SignIn />} />
            <Route path="/Register" element={<Register />}/>
            <Route path="/marketplace" element={<marketplace />}/>  
            <Route path="/NewListing" element={<NewListing />} />
            <Route path="/EditListing" element={<EditListing />} />   
            </Routes>
          </BrowserRouter>
  );
}

export default App;



