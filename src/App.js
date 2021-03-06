import { lazy, Suspense } from 'react';
import Education from './components/Education';
import Footer from './components/Footer';
import ParticlesContainer from './components/ParticlesContainer';
import ProjectSlider from './components/ProjectSlider';
import About from './components/About';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Skill = lazy(() => import('./components/Skill'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'))
function App() {
  return (
    <Suspense
    fallback={
      <div className='sk-folding-cube'>
          <div className='sk-cube1 sk-cube'></div>
          <div className='sk-cube2 sk-cube'></div>
          <div className='sk-cube4 sk-cube'></div>
          <div className='sk-cube3 sk-cube'></div>
        </div>
      }
    >
      <ParticlesContainer/>
      <div className='App container px-2.5 mx-auto max-w-screen-lg z-10'>
        <Header />
        <main>
          <Hero />
          <About />
          <ProjectSlider />
          <Education />
          <Experience />
          <Skill />
          <Contact />
        </main>
        <Footer />
      </div>
      </Suspense>
      
  );
}

export default App;
