
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';

import Sidebar from './Components/Sidebar';
import Tickets from './pages/Tickets';
import Movies from './pages/Movies';
import Categories from './pages/Categories';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="p-4 mt-10 sm:ml-64">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/tickets' element={<Tickets />} />
          <Route exact path='/movies' element={<Movies />} />
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/users' element={<Users />} />

        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
