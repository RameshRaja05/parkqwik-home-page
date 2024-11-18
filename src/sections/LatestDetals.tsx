import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useKeenSlider } from 'keen-slider/react';
import CenteredContainer from "../components/CenteredContainer";

const LatestDeals = () => {
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
          perView: 1.8,
          spacing: 10,
        }
      });

  return (
    <CenteredContainer>
    <Box maxHeight={"250px"} width={"100%"}>
      <Box component={"div"} sx={{  marginLeft:"20px" }} ref={sliderRef} className="keen-slider" height={"150px"}>
      <Card sx={{ background: "linear-gradient(360deg, rgba(149,9,144,1) 35%, rgba(228,152,234,1) 100%)", borderRadius: "15px" }} className="keen-slider__slide">
            <CardContent>
                <Typography variant="h6" noWrap color="yellow">
                    Get 15% off on
                </Typography>
                <Typography variant="h5" noWrap color="white">
                    FASTAG recharge
                </Typography>
                <Typography variant="caption" noWrap color="white" fontWeight={300} fontSize={"10px"}>
                  Pay using Axis Bank Credit & Debit Cards
                </Typography>
                <Button variant="outlined" sx={{ backgroundColor: "white", borderRadius: "15px", textTransform: "none", height: "23px", padding: "10px", color: "black", marginTop: "10px" }}>Recharge Now</Button>
            </CardContent>
        </Card>
        <Card sx={{ background: "linear-gradient(360deg, rgba(9,14,149,1) 35%, rgba(156,152,234,1) 100%)", borderRadius: "15px" }} className="keen-slider__slide">
            <CardContent>
                <Typography variant="h6" color="white">
                    Reserve a Parking Slot
                </Typography>
                <Typography variant="caption" color="white" fontWeight={300} fontSize={"10px"}>
                  Win 300ml petrol on your first parking
                </Typography>
                <Button variant="outlined" sx={{ backgroundColor: "white", borderRadius: "15px", textTransform: "none", height: "23px", padding: "10px", color: "black", marginTop: "10px" }}>Recharge Now</Button>
            </CardContent>
        </Card>
      </Box>
    </Box>
  </CenteredContainer>
  )
}

export default LatestDeals;