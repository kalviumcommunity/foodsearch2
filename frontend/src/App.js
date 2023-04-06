import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './component/HomePage/Homepage';
import Navbar from './component/Navbar/Navbar';
import Save from './component/Save/Save';
import AboutUs from './component/Aboutus/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/'element={<Homepage/>}/>
      <Route path='/save'element={<Save/>}/>
      <Route path='/about-us'element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
