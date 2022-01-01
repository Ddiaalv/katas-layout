import "./App.css";
import { Description } from "./components/Description/Description";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Laptop } from "./components/Laptop/Laptop";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Description />
        <Laptop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
