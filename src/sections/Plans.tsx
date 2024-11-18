import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CenteredContainer from "../components/CenteredContainer";
import PlanCard from "../components/PlanCard";
import { info } from "../info/info"


const Plans = () => {
  return (
    <CenteredContainer>
      <Box sx={{ maxWidth: "90%", maxHeight: "150px", paddingBottom: "40px" }}>
        <Typography variant="h6" mb={"16px"} paddingLeft={"14px"}>
           Premium Plans
        </Typography>
        <Grid container columnSpacing={1}>
          {
            info.plans.map((plan,idx) => (
              <Grid size={6} sx={{ position: "relative" }} key={idx}>
                <PlanCard plan={plan}/>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </CenteredContainer>
  )
}

export default Plans