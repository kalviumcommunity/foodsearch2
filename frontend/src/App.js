import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './component/landingPage/landingpage';
import Homepage from './component/HomePage/Homepage';
import Navbar from './component/Navbar/Navbar';
import Save from './component/Save/Save';
import AboutUs from './component/Aboutus/AboutUs';

function App() {
  return (
    <div className="App">
      {/* <Landingpage/> */}
      <Routes>
      <Route path='/'element={<Landingpage/>}/>
      <Route path='/home'element={<Homepage/>}/>
      <Route path='/save'element={<Save/>}/>
      <Route path='/about-us'element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
