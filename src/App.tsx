import "./App.css";
import { Description } from "./components/Description/Description";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Laptop } from "./components/Laptop/Laptop";
import { Table } from "./components/Table/Table";
import { Team } from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Description />
        <Laptop />
        <Table />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
