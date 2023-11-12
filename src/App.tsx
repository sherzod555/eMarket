import './App.css'
import BestSeller from './components/best-seller/best-seller'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Header/>
      <Navbar />
      <Intro/>
      <BestSeller/>
    </>
  )
}

export default App
