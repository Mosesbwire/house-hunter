import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Gallery from './components/gallery/Gallery';
import ListingPage from './components/listing/ListingPage';
function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/listing' element={<ListingPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
