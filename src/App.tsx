import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import WaitingList from './components/waiting-list/waiting-list'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WaitingList />
      <Footer />
    </div >
  )
}

export default App