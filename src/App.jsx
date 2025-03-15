import '../src/assets/css/main.css'
import Header from './components/Header/header'
import About from './components/About/about'
import Works from './components/Works/works';
import WorkOn from './components/WorkOn/workon'
import Collab from './components/Collab/collab';
import Footer from './components/Footer/footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>

      <Works/>
      <WorkOn/>

      <Collab/>
      <Footer/>
    </div>
  );
}

export default App;