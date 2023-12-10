import './App.css';
import Home from './components/Home';
import Body from './components/Body';

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
            path='/welcome'
            element={<Body />}
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
