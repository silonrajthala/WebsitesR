import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Explore from './Components/Pages/Explore';
import Home from './Components/Pages/Home';
import Price from './Components/Pages/Price';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='explore'>
       <Explore />
      </section>
      <section id='price'>
       <Price />
      </section>
      <section id='contact'>
       <Contact />
      </section>
      <footer>
      <h1>Copyright © XXXX. All Image Source Internet</h1>
      </footer>
    </div>
  );
}

export default App;
