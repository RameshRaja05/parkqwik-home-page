import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useKeenSlider } from 'keen-slider/react';
import CenteredContainer from "../components/CenteredContainer";
import DealCard from "../components/DealCard";
import {info} from "../info/info";


const Deals = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 10,
    }
  });

  return (
    <CenteredContainer>
      <Box maxHeight={"200px"} width={"100%"}>
        <Typography variant='h6' sx={{ marginBottom: "16px", paddingLeft: "18px" }}>
          Deals for you
        </Typography>
        <Box component={"div"} sx={{  marginLeft:"20px" }} ref={sliderRef} className="keen-slider" height={"140px"}>
          {
             info.deals.map((deal,idx)=>(
                  <DealCard deal={deal} key={idx}/>
             ))
          }
        </Box>
      </Box>
    </CenteredContainer>
  )
}

export default Deals;