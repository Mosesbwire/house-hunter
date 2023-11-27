import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
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
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthContextProvider>
      <ListingContextProvider>
          <ToastContainer/>
          <Router>
              <Routes>
                    <Route element={<Layout/>}>
                      <Route path='/' element={<Gallery/>}/>
                      <Route path='/:type/:location/:id' element={<ListingPage/>}/>
                      <Route path='/map' element={<Map/>}/>
                      <Route path='/saved-listing' element={<SavedListings/>}/>
                    </Route>
                    <Route path='/pricing' element={<Pricing/>}/>
                    <Route path='/sign-in' element={<Signin/>}/>
                    <Route path='/sign-up' element={<Signup/>}/>
              
              </Routes>
          </Router>
      </ListingContextProvider>
    </AuthContextProvider>
  );
}

export default App;
