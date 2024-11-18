import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IDeal } from "../types";

type dealProps = {
    deal: IDeal
}

const DealCard = ({ deal }: dealProps) => {
    return (
        <Card sx={{ background: deal.backgroundColor, borderRadius: "15px" }} className="keen-slider__slide">
            <CardContent sx={{ padding: "30px 3px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body1" noWrap color="yellow">
                    {deal.title}
                </Typography>
                <Typography variant="caption" noWrap color="white" fontWeight={300} fontSize={"11px"}>
                    {deal.description}
                </Typography>
                <Button variant="outlined" sx={{ backgroundColor: "white", borderRadius: "15px", textTransform: "none", height: "23px", padding: "10px", color: "black", marginTop: "10px" }}>{deal.buttonText}</Button>
            </CardContent>
        </Card>
    )
}

export default DealCard;