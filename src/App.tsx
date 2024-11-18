import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Services from "./sections/Services";
import Fastag from './sections/Fastag';
import Others from './sections/Others';
import Travel from './sections/Travel';
import Recharge from './sections/Recharge';
import Support from './sections/Support';
import Offer from './sections/Offer';
import Bottom from './sections/Bottom';
import Trending from './sections/Trending';
import Plans from "./sections/Plans";
import LatestDeals from './sections/LatestDetals';
import ServicesSlider from './sections/ServicesSlider';
import Deals from './sections/Deals';
import 'keen-slider/keen-slider.min.css';
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <Box className='green-box'/>
        <Box component="section" marginTop="-55px">
          <Services />
          <Fastag />
          <ServicesSlider />
          <Others />
          <Deals />
          <Travel />
          <Plans />
          <Recharge />
          <LatestDeals />
          <Support />
          <Trending />
          <Offer />
          <Bottom />
        </Box>
    </>
  )
}

export default App;
