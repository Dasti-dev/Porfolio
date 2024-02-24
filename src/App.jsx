import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Section from './components/section'
import Footer from './components/footer'
import './App.css'
import VerticalTimelineComponent from './components/VerticalTimeline';
import eventsData from './data.json';
// import Timeline from './components/Timeline'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div id="landing"> {/* Add IDs corresponding to the sections */}
        <Landingpage />
      </div>
      <div id="about">
        <Section />
      </div>
      <div id="timeline">
        <VerticalTimelineComponent events={eventsData} />
      </div>
      <Footer />
    </div>
  )
}

export default App
