import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from "../components/ShadowBox";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Item from "../components/Item";
import tollEstimatorIcon from "../assets/toll-road.png";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import TrafficIcon from '@mui/icons-material/Traffic';
import LocalCarWash from "@mui/icons-material/LocalCarWash"


const Travel = () => {
  return (
    <CenteredContainer>
      <ShadowBox height={"120px"} width={"80%"}>
        <Typography variant="h6" mb={"10px"}>
          Gonna Travel?
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ padding: "5px" }}>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <LocalCarWash sx={{ color: "green" }} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
              Car Wash
            </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <img src={tollEstimatorIcon} alt="" height={25} style={{ color: "green" }} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
               Estimate Toll
            </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <LocalMallIcon sx={{ color: "green" }} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
                Shop
            </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <TrafficIcon sx={{ color: "green" }} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
               Protocols
            </Typography>
          </Grid>
        </Grid>
      </ShadowBox>
    </CenteredContainer>
  )
}

export default Travel;