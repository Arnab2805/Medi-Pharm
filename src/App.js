import React from 'react';
import CustomCarousel from './components/carousel';
import CustomGrid from './components/grid';
import CustomSection from './components/section';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <CustomGrid />
      <CustomCarousel />
      <CustomSection />
      <Footer />
    </div>
  );
};

export default App