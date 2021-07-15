
// styled component
import GlobalStyles from "./GlobalStyles";

// router
import { Switch, Route } from 'react-router-dom';

// pages
import LandingPage from "./pages/LandingPage";
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <>
      <GlobalStyles />

      <Nav />

      <Switch>
      <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/MenuPage" exact>
          <MenuPage />
        </Route>
        <Route path="/AboutPage" exact>
          <AboutPage />
        </Route>
        <Route path="/ContactPage" exact>
            <ContactPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
