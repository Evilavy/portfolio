import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ITMonitoring from "../components/ITMonitoring";
import Footer from "../components/Footer";

function Index() {
  return (
    <div className="bg-black text-gray-200 p-5 overflow-hidden">
      <div className="bg-black bg-grid-white/[0.05] bg-grid relative">
        <div className="max-w-6xl mx-auto p-5">
          <NavBar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg:gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-6xl mx-auto p-5">
        <Skills />
        <Projects />
        <ITMonitoring/>
      </div>

      <footer className="border-t border-gray-500 mt-24">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Index;
