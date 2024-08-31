import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Sobre from "./components/Sobre";
import Trabalho from "./components/Trabalho";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Hero/>
      <Skills/>
      <Sobre/>
      <Trabalho/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
