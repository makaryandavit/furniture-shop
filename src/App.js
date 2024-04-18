import './global.css';
import { Footer, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9 } from './Components';
import { Header } from './Components/Header';
import { Home, Shop } from './BigComponents';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
          {/* <Route path="" element={}/> */}
          {/* <Route path="" element={}/> */}
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
