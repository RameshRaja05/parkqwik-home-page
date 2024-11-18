import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useKeenSlider } from 'keen-slider/react';
import CenteredContainer from "../components/CenteredContainer";
import DotButton from "../components/DotButton";
import fastagCarImg from "../assets/fastag-car.png";
import carWashImg from "../assets/car-washing-plan.png";
import addMoneyToWalletImg from "../assets/add-money-wallet.png";

const ServicesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        mode:"snap",
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });

    return (
        <>
            <Box ref={sliderRef} className="keen-slider" maxHeight={"250px"} width={"90%"}>
                <CenteredContainer className="keen-slider__slide">
                    <Box sx={{ position: "relative", height: "100%", width: "90%" }}>
                        <Card sx={{ background: "linear-gradient(360deg, rgba(13,152,106,1) 35%, rgba(13,152,106,1) 100%)", borderRadius: "15px", paddingBottom: "30px" }}>
                            <CardContent sx={{ color: "white" }}>
                                <Typography variant="h6" fontWeight={300}>
                                  Recharge Fastag
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={200}>
                                  Get exciting prices
                                </Typography>
                                <Button variant="outlined" color="success" sx={{ textTransform: "none", borderRadius: "15px", backgroundColor: "white", marginTop: "20px" }}>Recharge Now</Button>
                            </CardContent>
                            <CardMedia
                                component={"img"}
                                sx={{ height: "100px", width: "150px", position: "absolute", top: 20, right: 20 }}
                                src={fastagCarImg}
                            />
                        </Card>
                    </Box>
                </CenteredContainer>
                <CenteredContainer className="keen-slider__slide">
                    <Box sx={{ position: "relative", height: "100%", width: "90%" }}>
                        <Card sx={{ background: "linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(8,190,193,1) 100%)", borderRadius: "15px", paddingBottom: "30px" }}>
                            <CardContent sx={{ color: "white" }}>
                                <Typography variant="h6" fontWeight={300}>
                                   Add money to wallet
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={200}>
                                   Get 2% cashback
                                </Typography>
                                <Button variant="outlined" color="success" sx={{ textTransform: "none", borderRadius: "15px", backgroundColor: "white", marginTop: "15px" }}>Add money</Button>
                            </CardContent>
                            <CardMedia
                                component={"img"}
                                sx={{ height: "100px", width: "150px", position: "absolute", top: 20, right: 20 }}
                                src={addMoneyToWalletImg}
                            />
                        </Card>
                    </Box>
                </CenteredContainer>
                <CenteredContainer className="keen-slider__slide">
                    <Box sx={{ position: "relative", height: "100%", width: "90%" }}>
                        <Card sx={{ background: "linear-gradient(360deg, rgba(13,152,106,1) 35%, rgba(13,152,106,1) 100%)", borderRadius: "15px", paddingBottom: "16px" }}>
                            <CardContent sx={{ color: "white" }}>
                                <Typography variant="h6" fontWeight={300}>
                                  Doorstep Car Wash
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={200}>
                                  Get 20% offer on your <br /> first car wash
                                </Typography>
                                <Button variant="outlined" sx={{ textTransform: "none", borderRadius: "15px", backgroundColor: "rgb(14, 36, 30)", marginTop: "15px", color: "white" }}>Book now</Button>
                            </CardContent>
                            <CardMedia
                                component={"img"}
                                sx={{ height: "100px", width: "150px", position: "absolute", top: 20, right: 20 }}
                                src={carWashImg}
                            />
                        </Card>
                    </Box>
                </CenteredContainer>
            </Box>
            {loaded && instanceRef.current && (
                <Box component={"div"} className="dots" sx={{ display: "flex", padding: "10px 0", justifyContent: "center",marginTop:"-10px" }}>
                    {
                        [...Array(instanceRef.current?.track.details.slides.length).keys()]
                            .map((idx) => (
                                <DotButton
                                    key={idx}
                                    onClick={() => { instanceRef.current?.moveToIdx(idx) }}
                                    sx={{
                                        ...(currentSlide === idx &&
                                        {
                                            background: "green"
                                        }
                                        )
                                    }}
                                />
                            ))
                    }
                </Box>)}
        </>
    )
}

export default ServicesSlider