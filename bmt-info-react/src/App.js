import React, {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import './css/navigation.css';
import './css/info-home.css';
import './css/footer.css';
import Navigation from './Components/Navigation';

const InfoHome = lazy(() => import('./Components/InfoHome'));
const GeneralInformation = lazy(() => import('./Components/GeneralInformation'));
const PaymentsRefunds = lazy(() => import('./Components/PaymentsRefunds'));
const DownloadingDelivery = lazy(() => import('./Components/DownloadingDelivery'));
const Footer = lazy(() => import('./Components/Footer'));
const Error = lazy(() => import('./Components/Error'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<InfoHome />} />
          <Route path="/general-information" element={<GeneralInformation />} />
          <Route path="/payments-refunds" element={<PaymentsRefunds />} />
          <Route path="/downloading-delivery" element={<DownloadingDelivery />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
