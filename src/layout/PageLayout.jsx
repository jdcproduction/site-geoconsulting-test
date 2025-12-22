import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Realisations from '../pages/Realisations';
import About2 from '../pages/About2';
import MentionLegal from '../pages/MentionLegal';
import Confidentialite from '../pages/Confidentialite';
import SitePlan from '../pages/SitePlan';

const PageLayout = ({ className }) => {
  return (
    <div className={className}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About2 />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/realisations' element={<Realisations />} />
        <Route path='/mentions-legales' element={<MentionLegal/>} />
        <Route path='/politique-confidentialite' element={<Confidentialite/>} />
        <Route path='/plan-du-site' element={<SitePlan/>}/>
      </Routes>
    </div>
  );
};

export default PageLayout;
