import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Portfolio } from './components/portfolio';
import { About } from './components/about';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
}
