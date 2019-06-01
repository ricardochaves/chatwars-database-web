import React from 'react';
import About from '../components/About';
import defaultPage from '../hocs/defaultPage';


const AboutPage = () => (
  <div>
    <About />

  </div>
)

export default defaultPage(AboutPage)
