import "./App.css";
import { Description } from "./components/Description/Description";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Description />
      </main>
      <Footer />
    </div>
  );
}

export default App;
