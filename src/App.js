import Navigation from './Components/Main Page/Navigation'
import Home from './Components/Main Page/Home'
import SubjectsList from './Components/Main Page/SubjectsList'
import Footer from './Components/Main Page/Footer'
import JoinUs from './Components/Main Page/JoinUs'
import HowItWorks from './Components/Main Page/HowItWorks'
import Lessons from './Components/Main Page/Lessons'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <SubjectsList/>
      <Lessons/>
      <HowItWorks/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
