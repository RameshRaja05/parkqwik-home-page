import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import CenteredContainer from '../components/CenteredContainer';
import phoneImg from "../assets/footer-phone.jpg";

const Bottom = () => {
  return (
    <CenteredContainer>
      <Box sx={{ width: "90%", height: "220px", paddingBottom: "40px" }}>
        <Typography variant='h6' sx={{marginBottom:"16px",paddingLeft:"14px"}}>
          How ParkQwik Works
        </Typography>
        <Card sx={{ borderRadius: "15px" }}>
          <CardMedia
            component="img"
            height="194px"
            image={phoneImg}
            alt="Paella dish"
          />
        </Card>
      </Box>
    </CenteredContainer>
  )
}

export default Bottom;