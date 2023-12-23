import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <section id='home'>
        <div className='home-container slideshow'>
          <NavBar />
          
          <div className='container-hero'>
            <div className='hero'>
              <div className='hero-text'>
                <h1>Welcome to blah</h1>
                <h2>Leading the way in Adventure</h2>
                <h3>We believe everyone should travel Because travelling’s for everyone. We make vacations magical Making life the daring adventure you deserve.</h3>
                <button>CONTACT US</button>
              </div>
            </div>
          </div>
          <div className='container-hero2'>
            <div className='detail'>
            <h1> k xa sathi sab thik xa ne?</h1>
            <h1>aja laai yeti nai nindra lagyo bye!</h1>
            </div>
            
          </div>

        </div>
        
      </section>
      <section id='about'>
      <About />
      </section>
      
    </div>
  );
}

export default App;
