import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from "../components/ShadowBox";
import Item from "../components/Item";
import { info } from "../info/info"

const Offer = () => {
  return (
    <CenteredContainer>
      <ShadowBox maxHeight="150px" width={"80%"}>
        <Typography variant="h6" sx={{marginBottom:"16px"}}>
         Exclusive offers
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ padding: "5px" }}>
          {
            info.offer.map(({ title, Icon }) => (
              <Grid size={4} sx={{ textAlign: "center" }} key={title}>
                <Item sx={{ backgroundColor: "#e3f4ec" }}>
                  <Icon sx={{ color: "green" }} />
                </Item>
                <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"10px"} gutterBottom component={"p"}>
                  {title}
                </Typography>
              </Grid>
            ))
          }
        </Grid>
      </ShadowBox>
    </CenteredContainer>
  )
}

export default Offer;