import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Overview from './components/overview/overview'
import Features from './components/features/features'
import Mockups from './components/mockups/mockups'
import Mission from './components/mission/mission'
import WaitingList from './components/waiting-list/waiting-list'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Features />
      <Mockups />
      <Mission />
      <WaitingList />
      <Footer />
    </div >
  )
}

export default App