import { Avatar, Button, Fab, Badge,Box } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import profileImg from "../assets/Profile-img.png";
import hamburgerMenu from "../assets/hamburger-menu.png";

const AddVehicleButton = styled(Button)({
  backgroundColor: "white",
  color: "green",
  borderRadius: "15px",
  padding: "5px 30px",
  textTransform: "none"
});

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
  backgroundColor:"white"
}));

const Navbar = () => {

  const icons = [AccountBalanceWalletOutlinedIcon, NotificationsNoneOutlinedIcon, ReplyOutlinedIcon];

  const floatingButtons = icons.map((Icon, index) => (
    <Fab size="small" style={{ backgroundColor: "rgb(82, 138, 136)" }} key={index}>
      <Icon style={{ color: "white" }} />
    </Fab>));

  return (
    <nav>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar alt="Remy Sharp" src={hamburgerMenu} />
          }
        >
          <Avatar alt="Profile pic" src={profileImg} sx={{ width: 56, height: 56 }}/>
        </Badge>
        <AddVehicleButton variant="outlined" startIcon={<AddCircleIcon color="success" />}>
          <Typography variant="body1" fontWeight={500}>
            Add vehicle
          </Typography>
        </AddVehicleButton>
        {floatingButtons}
    </nav>
  )
}

export default Navbar;