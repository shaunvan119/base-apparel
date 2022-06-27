import logo from "./images/logo.svg"
import hero from "./images/hero-desktop.jpg"
import heroMobile from "./images/hero-mobile.jpg"
import Contact from "./Contact";

function App() {
  return (
    <div className="wrapper">
      <div className="split left">
          <img src={logo} alt="Logo" className="logo" />  
          <h1><span className="Were">WE'RE <br/></span><span className="coming-soon">COMING<br/>SOON</span></h1>
          <p className="hello-shoppers">Hello fellow shoppers! We're currently building our new<br/> 
          fashion store. Add your email below to stay up-to-date with<br/> 
          announcements and our launch deals.</p>
          <Contact/>
      </div>
      <div className="split right">
        <img src={hero} alt="girl" className="hero" /> 
        <img src={heroMobile} alt="girlMobile" className="heroMobile" />  
      </div>
    </div>



  );
}

export default App;
