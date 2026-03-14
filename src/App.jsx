import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
