import './App.css'
import BestSeller from './components/best-seller/best-seller'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Navbar from './components/navbar/navbar'
import Search from './components/search/search'
import WhyUs from './components/why-us/why-us'

function App() {

  return (
    <>
      <Header/>
      <Navbar />
      <Intro/>
      <BestSeller/>
      <WhyUs/>
      <Search/>
      <Footer/>
    </>
  )
}

export default App
