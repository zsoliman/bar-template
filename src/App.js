import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/about'
            element={<About />}
          />

          <Route
            path='/contact'
            element={<Contact />}
          />

        </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Header />
      <Body /> */}
    </div>
  );
}

export default App;
