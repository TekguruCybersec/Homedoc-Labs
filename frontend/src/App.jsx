import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return(
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="pt-6">
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}