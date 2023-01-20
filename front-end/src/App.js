
import './App.css';

function App() {
  return (
    <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sign-In" element={<Sign-In />} />
                <Route path="/Register" element={<Register />}/>
                <Route path="/NewListing" element={<NewListing />} />
                <Route path="/edit/:id" element={<EditListing />} />
              </Routes>
            </BrowserRouter>
  );
}

export default App;
