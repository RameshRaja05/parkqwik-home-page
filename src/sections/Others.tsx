import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from "../components/ShadowBox";
import Item from "../components/Item";
import { info } from "../info/info"

const Others = () => {
  return (
    <CenteredContainer>
      <ShadowBox maxHeight={"140px"} width={"80%"}>
        <Typography variant="h6">
          Others
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ padding: "5px", marginTop: "10px", marginBottom: "10px" }}>
          {
            info.others.map(({ title, Icon }) => (
              <Grid size={3} sx={{ textAlign: "center" }} key={title}>
                <Item>
                  <Icon />
                </Item>
                <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
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

export default Others;