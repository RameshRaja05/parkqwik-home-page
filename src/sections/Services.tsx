import Grid from "@mui/material/Grid2";
import Typography  from "@mui/material/Typography";
import Item from "../components/Item";
import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from "../components/ShadowBox";
import { info } from "../info/info";


const Services = () => {

  return (
    <CenteredContainer>
      <ShadowBox height={"220px"} width={"80%"}>
        <Typography variant="h6">
           Services
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} padding={"5px"}>
          {info.services.map(({ title, icon }) => (
            <Grid size={3} sx={{ textAlign: "center" }} key={title}>
              <Item>
                <img src={icon} alt={`${title} logo`} height={25} />
              </Item>
              <Typography variant="body2" sx={{lineHeight:1}} paddingTop={"5px"} gutterBottom>
                {title}
              </Typography>
              {/* <p style={{ paddingTop: "5px" }}>{title}</p> */}
            </Grid>))
          }
        </Grid>
      </ShadowBox>
    </CenteredContainer>
  )
}

export default Services;