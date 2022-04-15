import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Breakfast from './Pages/servies/Breakfast/Breakfast';
import Dinner from './Pages/servies/Dinner/Dinner';
import Lunch from './Pages/servies/Lunch/Lunch';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/breakfast'element= {<Breakfast></Breakfast>}></Route>
        <Route path='/dinner'element= {<Dinner></Dinner>}></Route>
        <Route path='/lunch'element= {<Lunch></Lunch>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
