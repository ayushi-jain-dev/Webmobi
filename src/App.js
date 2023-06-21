import About from "./components/About";
import Expertise from "./components/Expertise";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Expertise />
      <Stories />
      <Contact />
    </div>
  );
}

export default App;
