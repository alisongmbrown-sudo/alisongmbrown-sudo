import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Workshops from "./components/Workshops";
import Recognition from "./components/Recognition";
import Community from "./components/Community";
import Speaking from "./components/Speaking";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Research />
        <Workshops />
        <Recognition />
        <Community />
        <Writing />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
