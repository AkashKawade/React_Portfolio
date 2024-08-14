
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import WorkExperience from "./components/WorkExperience/WorkExperience";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <WorkExperience></WorkExperience>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
