
import './App.css';

function App() {
  return (
    <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sign-In" element={<Sign-In />} />
                <Route path="/Register" element={<Register />}/>
              </Routes>
            </BrowserRouter>
  );
}

export default App;
