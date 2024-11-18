import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";


const DotButton=styled(Button)(()=>({
    border: "none",
    minHeight:"10px",
    minWidth:"10px",
    background: "#c5c5c5",
    borderRadius: "50%",
    margin: "0 5px",
    padding: 0,
    cursor: "pointer"
}));

export default DotButton;