import './global.css';
import { Footer, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9 } from './Components';
import { Header } from './Components/Header';
import { About, Blog, Home, Shop } from './BigComponents';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="about" element={<About />}/>
          <Route path="blog" element={<Blog />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
