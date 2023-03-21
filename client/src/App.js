import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Gallery from './components/gallery/Gallery';
import ListingPage from './components/listing/ListingPage';
import Map from './components/map/Map'
import Pricing from './components/pricing/Pricing'
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup'
import SavedListings from './components/saved-listing/SavedListings';
function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/listing' element={<ListingPage/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          <Route path='/saved-listing' element={<SavedListings/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
