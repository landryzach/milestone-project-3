import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import NewListing from './views/NewListing'
import EditListing from './views/EditListing'


function App() {
  return (
    
              <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/NewListing" element={<NewListing />} />
                <Route path="/edit/:id" element={<EditListing />} />
              </Routes>
    
  );
}

module.exports = App;


//<Route path="/Sign-In" element={<Sign-In />} />
//<Route path="/Register" element={<Register />}/>