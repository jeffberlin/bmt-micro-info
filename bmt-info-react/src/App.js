import React, {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/navigation.css';
import './css/info-home.css';
import './css/footer.css';
import Navigation from './Components/Navigation';

const InfoHome = lazy(() => import('./Components/InfoHome'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<InfoHome />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
