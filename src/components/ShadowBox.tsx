import { styled } from "@mui/material/styles";
import Box  from "@mui/material/Box";

const ShadowBox=styled(Box)(()=>({
    backgroundColor:"white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "15px",
    padding: "1rem"
}))

export default ShadowBox;