import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CenteredContainer=styled(Box)(()=>({
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    margin:"20px 0"
}))


export default CenteredContainer;