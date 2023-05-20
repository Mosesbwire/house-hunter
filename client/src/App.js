import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './components/layout/Layout';
import Gallery from './components/gallery/Gallery';
import ListingPage from './components/listing/ListingPage';
import Map from './components/map/Map'
import Pricing from './components/pricing/Pricing'
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup'
import SavedListings from './components/saved-listing/SavedListings';
import {ListingContextProvider} from './context/listingsContextProvider';
import { AuthContextProvider } from './context/authContextProvider';
import { authContext } from './context/authContextProvider';
function App() {
  return (
    <AuthContextProvider>
      <ListingContextProvider>
        <Router>
            <Routes>
              <Route element={<Layout/>}>
                <Route path='/' element={<Gallery/>}/>
                <Route path='/:type/:location/:id' element={<ListingPage/>}/>
                <Route path='/map' element={<Map/>}/>
              </Route>
              <Route path='/pricing' element={<Pricing/>}/>
              <Route path='/sign-in' element={<Signin/>}/>
              <Route path='/sign-up' element={<Signup/>}/>
              <Route path='/saved-listing' element={<SavedListings/>}/>
            </Routes>
        </Router>
      </ListingContextProvider>
    </AuthContextProvider>
  );
}

export default App;
