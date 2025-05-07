import { Header, Hero, Features, Pricing, Faq, Testimonials, Download, Footer } from './sections';
import type { FC } from "react";

const App:FC = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;