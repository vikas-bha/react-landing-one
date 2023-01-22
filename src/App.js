
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home"
import './styles/app.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/mediaquery.scss'
import Services from "./components/Services";
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  return (

    <Router>
      <Header/> 

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
