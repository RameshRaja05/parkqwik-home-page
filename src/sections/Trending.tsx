import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from "@mui/material/Typography";
import CenteredContainer from '../components/CenteredContainer';
import fuelCarImg from "../assets/fuel-car.png";
import profileImg from "../assets/Profile-img.png";

const Trending = () => {
  return (
    <CenteredContainer>
      <Box sx={{ width: "90%", maxHeight: "240px", paddingBottom: "40px" }}>
        <Typography variant='h6' sx={{marginBottom:"16px",paddingLeft:"14px"}}>
          Trending
        </Typography>
        <Card sx={{ borderRadius: "15px" }}>
          <Box position="relative">
            <CardMedia
              component="img"
              height="220px"
              sx={{ filter: "blur(8px) hue-rotate(120deg) saturate(2)", backgroundColor: "green" }}
              image={fuelCarImg}
              alt="Paella dish"
            />
            <CardContent sx={{ position: "absolute", top: 10, left: 10 }}>
              <Typography variant='h4' sx={{color:"rgb(215, 215, 40)"}}>
                Save &#x20b9; 500
              </Typography>
              <Typography variant='h6' sx={{color: "white", marginTop: "10px",fontWeight:300}}>
                 On Your First EV Parking
              </Typography>
              <Typography variant='body2' sx={{marginTop:"10px",color:"white"}}>
                We provide dedicated monthly <br />
                parking with surveilance
              </Typography>
            </CardContent>
            <Box component="div" sx={{ position: "absolute", top: 160, left: 200,marginBottom:"10px" }}>
              <Grid container>
                <Grid size={4}>
                  <AvatarGroup spacing={24}>
                    <Avatar alt="Person img" src={profileImg} sx={{ height: "30px", width: "30px" }} />
                    <Avatar alt="Person img" src={profileImg} sx={{ height: "30px", width: "30px" }} />
                    <Avatar alt="Person img" src={profileImg} sx={{ height: "30px", width: "30px" }} />
                  </AvatarGroup>
                </Grid>
                <Grid size={4} sx={{ marginLeft: "5px", color: "white" }}>
                  <Box component="div" sx={{ whiteSpace: "nowrap" }}>
                    <h1 style={{ fontSize: "25px" }}>100 +</h1>
                    <p style={{ fontSize: "12px" }}>Happy Customers</p>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Box>
    </CenteredContainer>
  )
}

export default Trending;