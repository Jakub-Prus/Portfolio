import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="w-full flex flex-col items-center justify-start overflow-x-hidden font-inter dark:bg-[#171c28] dark:text-white">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
