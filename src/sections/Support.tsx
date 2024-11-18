import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from "../components/ShadowBox";
import Item from "../components/Item";
import ApartmentIcon from '@mui/icons-material/Apartment';
import sirenIcon from "../assets/siren-icon.png";
import payChallanIcon from "../assets/bill.png";

const Support = () => {
  return (
    <CenteredContainer>
      <ShadowBox maxHeight={"130px"} width={"80%"}>
        <Typography variant="h6" sx={{marginBottom:"16px"}}>
          Your Car's Center
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ padding: "5px", marginTop: "10px", marginBottom: "10px" }}>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <img src={payChallanIcon} alt="pay challan Icon" height={25} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
              Pay Challan
            </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <img src={sirenIcon} alt="siren Icon" height={25} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
               Crime Reporter
            </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <ApartmentIcon sx={{ color: "green" }} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
                RTO Center
              </Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: "center" }}>
            <Item sx={{ backgroundColor: "#e3f4ec" }}>
              <EmojiTransportationIcon sx={{ color: "green" }} />
            </Item>
            <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
               PUCC Center
            </Typography>
          </Grid>
        </Grid>
      </ShadowBox>
    </CenteredContainer>
  )
}

export default Support;