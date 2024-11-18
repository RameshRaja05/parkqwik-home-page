import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from "../components/ShadowBox";
import Item from "../components/Item";
import { info } from "../info/info";



const Recharge = () => {
  return (
    <CenteredContainer>
      <ShadowBox maxHeight={"500px"} width={"80%"}>
        <Box>
          <Typography variant="h6" sx={{marginBottom:"16px"}}>
             Recharge & Bill Payments
          </Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ padding: "5px" }}>
          {info.Recharge.map(({ title, Icon }) => (
            <Grid size={3} sx={{ textAlign: "center" }} key={title}>
              <Item sx={{ backgroundColor: "#e3f4ec" }}>
                <Icon sx={{ color: "green" }} />
              </Item>
              <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
                {title}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box component={"div"} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button variant="outlined" color="success" sx={{ textTransform: "none", borderRadius: "15px" }}>view all</Button>
        </Box>
      </ShadowBox>
    </CenteredContainer>
  )
}

export default Recharge;