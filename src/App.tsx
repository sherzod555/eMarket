import './App.css'
import BestSeller from './components/best-seller/best-seller'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Navbar from './components/navbar/navbar'
import Search from './components/search/search'
import TopProducts from './components/top-product/top-product'
import WhyUs from './components/why-us/why-us'

function App() {

  return (
    <>
      <Header/>
      <Navbar />
      <Intro/>
      <TopProducts/>
      <BestSeller/>
      <WhyUs/>
      <Search/>
      <Footer/>
    </>
  )
}

export default App
