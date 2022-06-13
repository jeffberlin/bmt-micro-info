import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './CSS/App.css';
import './CSS/nav.css';
import './CSS/info-home.css';
import './CSS/footer.css';

// Constants
const Nav = React.lazy(() => import('./Components/Nav'));
const Footer = React.lazy(() => import('./Components/Footer'));

// Pages
const Error = React.lazy(() => import('./Components/Error'));
const Home = React.lazy(() => import('./Components/InfoHome'));
const GeneralInformation = React.lazy(() => import('./Components/GeneralInformation'));
const PaymentsRefunds = React.lazy(() => import('./Components/PaymentsRefunds'));
const DownloadingDelivery = React.lazy(() => import('./Components/DownloadingDelivery'));

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
}

function App() {
  useScrollToTop();
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <div className="App">
      <Nav />
      <div
        className={ `${transitionStage}` }
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="general-information"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <GeneralInformation />
              </Suspense>
            }
          />
          <Route
            path="payments-refunds"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PaymentsRefunds />
              </Suspense>
            }
          />
          <Route
            path="downloading-delivery"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DownloadingDelivery />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Error />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
