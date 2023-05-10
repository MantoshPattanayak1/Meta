import React from 'react'
import {BrowserRouter as Router,Routes, Route} from'react-router-dom'
import Header from './components/Header.jsx'
import './styles/App.scss'
import './styles/Header.scss'
import Home from './components/Home.jsx'
import './styles/Home.scss'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import './styles/contact.scss'
import './styles/footer.scss'
import Service from './components/Service.jsx'
import './styles/mediaquery.scss'
const App = () => {
  return (
    <Router>
                    <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/service" element={<Service/>}/>
            </Routes>
        <Footer/>
    </Router>
  )
}

export default App