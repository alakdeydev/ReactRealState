import "./assets/css/tailwind.css";
import About from "./components/About";
import Available from "./components/Available";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <Available/>
      <About/>
      <Cta/>
      <Faq/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
