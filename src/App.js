import {React,Component} from 'react'
import './App.css';
import Header from './components/Header';

import About from './components/About';
import Features from './components/Features';
import Cards from './components/Cards'
import Stories from './components/Stories';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Nav from './components/Nav';

class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Header/>
        <br></br>
        
        <About/>

        <Features/>
        <Cards/>
        <Stories/>

        <Booking/>
        <Footer/>
        <Nav/>
        

       
      </div>
    );

  }
  
}

export default App;
