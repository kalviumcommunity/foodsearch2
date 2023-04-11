import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './component/landingPage/landingpage';
import Homepage from './component/HomePage/Homepage';
import Navbar from './component/Navbar/Navbar';
import Save from './component/Save/Save';
import AboutUs from './component/Aboutus/AboutUs';
import Category from './component/CategoryPage/Category';
import Differentrecipe from './component/DifferentRecipe/Differentrecipe';
import Recipe from './component/Recipe/Recipe';


function App() {
  return (
    <div className="App">
      {/* <Landingpage/> */}
      <Routes>
      <Route path='/'element={<Landingpage/>}/>
      <Route path='/home'element={<Homepage/>}/>
      <Route path='/country/:country/:id'element={<Category/>}/>
      <Route path="/country/:country/subcategory/:foodType" element={<Differentrecipe/>} />
      <Route path='/save'element={<Save/>}/>
      <Route path='/about-us'element={<AboutUs/>}/>
      <Route path={"indian/:id"} element={<Recipe />} />
      </Routes>
    </div>
     

  );
}

export default App;
