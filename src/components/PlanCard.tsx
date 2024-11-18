import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IPlan } from "../types";

type planProps = {
    plan: IPlan
}

const ExploreButton = styled(Button)({
    backgroundColor: "white",
    borderRadius: "15px",
    textTransform: "none",
    height: "15px",
    padding: "10px",
    fontSize: "10px",
    color: "black",
    marginTop: "15px"
  })

const PlanCard = ({ plan }: planProps) => {
    return (
        <Card sx={{ borderRadius: "15px", background: "rgb(13,152,106)" }}>
            <CardContent>
                <Typography variant="subtitle1" color="yellow" sx={{ margin: "5px 0" }}>
                    {plan.title}
                </Typography>
                <Typography variant="caption" fontSize={"10px"} color="white" component={"p"}>
                    {plan.description}
                </Typography>
                <ExploreButton>explore now <ArrowRightAltIcon /></ExploreButton>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ height: "50px", width: "50px", position: "absolute", right: 0, bottom: 0 }}
                src={plan.image}
            />
        </Card>
    )
}

export default PlanCard;