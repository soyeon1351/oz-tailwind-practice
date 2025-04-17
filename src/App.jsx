import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-10">
        {contents.map((el) => (
        <Content key={el.id} content={el} />
        ))}
      </section>

    </main>
  );
}

export default App;
