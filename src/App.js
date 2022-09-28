import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Popular from './components/popular/Popular';
import Offer from './components/offers/OfferPage';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </div>
  )
}

export default App