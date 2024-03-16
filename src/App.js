import React  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import News from './Components/News/News';
import FullNews from './Components/News/FullNews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AddNewNews from './Components/News/AddNewNews';
import Volunteer from './Components/Volunteer/Volunteer';
import store from './redux/store';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:id" element={<FullNews />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addnews" element={<AddNewNews />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/login" element={<Login  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
