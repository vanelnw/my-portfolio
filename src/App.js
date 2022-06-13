
import "./App.scss";

import {
  About,
  Footer,
  Header,
  Contact,
  Skills,
  Testimonials,
  Work,
  Navbar,
} from "./components";
import Clients from "./components/Brands&Clients/Clients";
import ScrollToTop from "./components/ScrollToTop";

function App() {
 
  return (
    <div className="App" style={{ background: "#f2f7fb" }}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
