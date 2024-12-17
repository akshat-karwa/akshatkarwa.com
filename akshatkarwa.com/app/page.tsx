import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Academics from './components/Academics';

export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Academics />
    </main>
  );
}
