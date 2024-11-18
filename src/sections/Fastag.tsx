import OutlinedInput from '@mui/material/OutlinedInput';
import Grid from "@mui/material/Grid2";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CenteredContainer from "../components/CenteredContainer";
import ShadowBox from '../components/ShadowBox';
import Item from '../components/Item';
import netcLogo from "../assets/netc-logo-cropped.svg";
import bharatBillLogo from "../assets/bharat-billpay-seeklogo-cropped.svg";
import { info } from "../info/info";

const Fastag = () => {
  return (
    <CenteredContainer>
      <ShadowBox maxHeight={"500px"} width={"80%"}>
        <Typography variant='h6'>
          FASTag Recharge
        </Typography>
        <Typography variant='subtitle1' color='gray'>
           Get upto 100% cashback on first 3 Fastag Recharge
        </Typography>
        <Grid container columnSpacing={1} rowSpacing={2} margin={"10px 0 8px"}>
          <Grid size={8}>
            <OutlinedInput placeholder='Add vehicle or chassis number' color='success' sx={{ height: "38px", borderColor: "green", width: "100%", backgroundColor: "#e3f4ec" }} inputProps={{ style: { color: "green", fontSize: "13px" } }}/>
          </Grid>
          <Grid size={4}>
            <Button variant='contained' color='success' sx={{ textTransform: "none" }}>Recharge</Button>
          </Grid>
          <Grid size={3.5}>
            <Typography variant='body2'>
             Powered By
            </Typography>
          </Grid>
          {/* Fix the left blank space of svg*/}
          <Grid size={2} margin={"2px 5px 0 -16px"}>
            <img src={netcLogo} alt="netc logo" height={15} />
          </Grid>
          <Grid size={2}>
            <img src={bharatBillLogo} alt="bharat bill logo" height={15} />
          </Grid>
        </Grid>
        <Typography variant='h6'>
         My FASTags
        </Typography>
        <Divider style={{ marginTop: "16px", marginBottom: "8px" }} sx={{ borderColor: "gainsboro" }}/>
         <Typography variant='h6'>
          Discover
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ padding: "5px", margin: "10px 0"}}>
          {
            info.Fastag.map(({ title, Icon }) => (
              <Grid size={3} sx={{ textAlign: "center" }} key={title}>
                <Item sx={{ backgroundColor: "#e3f4ec" }}>
                  <Icon color='success'/>
                </Item>
                <Typography variant='body2' pt={"5px"}>
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

export default Fastag;