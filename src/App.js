import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Details from './pages/Details';
import ModalProvider from "./context/providers/ModalProvider";
import NavProvider from "./context/providers/NavProvider";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Nav from "./components/Nav";

import Toggle from "./components/Toggle";
import SharedProvider from "./context/providers/SharedProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
import Contact from "./pages/Contact";
import AnimationsProvider from "./context/providers/AnimationsProvider";

function App() {
      return (
              <ModalProvider>
                  <NavProvider>
                      <DestinationsProvider>
                          <SharedProvider>
                              <GalleryProvider>
                                  <AnimationsProvider>
                                      <Router className="App">
                                          {/* Nav 里含有 Link 所以 一定要包含到 BrowserRouter 里面即*/}
                                          {/*wrapped by a BrowserRouter*/}
                                          <Toggle/>
                                          <Nav/>
                                          <HelmetProvider>
                                              <Routes>
                                                  <Route path={'/'} element={<Home/>}/>
                                                  <Route path={'/about'} exact element={<About/>}/>
                                                  <Route path={'/details/:id'} element={<Details/>}/>
                                                  <Route path={'/contact'} element={<Contact/>}/>
                                                  <Route path={'*'} element={<NotFound/>}/>
                                              </Routes>
                                          </HelmetProvider>
                                      </Router>
                                  </AnimationsProvider>
                              </GalleryProvider>
                          </SharedProvider>
                      </DestinationsProvider>
                  </NavProvider>
              </ModalProvider>

      );
}

export default App;
