import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <Jobs className="jobs" />
      <Footer />
    </>
  );
}

export default App;
