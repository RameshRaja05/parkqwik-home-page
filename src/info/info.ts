import parkingIcon from "../assets/location.png";
import electricVehicleIcon from "../assets/electric-car.png";
import carWashIcon from "../assets/car-wash.png";
import carInsuranceIcon from "../assets/vehicle.svg";
import valetParkingIcon from "../assets/valet-parking.png";
import tollEstimatorIcon from "../assets/toll-road.png";
import rvHookupIcon from "../assets/rv.png";
import payChallanIcon from "../assets/bill.png";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import TrafficIcon from '@mui/icons-material/Traffic';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HouseIcon from '@mui/icons-material/House';
import DiscountIcon from '@mui/icons-material/Discount';
import CampaignIcon from '@mui/icons-material/Campaign';
import RedeemIcon from '@mui/icons-material/Redeem';
import carParkingPlanImg from "../assets/car-parking-plan.png";
import carWashingPlanImg from "../assets/car-washing-plan.png";

export const info = {
    services: [
        {
            title: "NearBy Parking",
            icon: parkingIcon
        },
        {
            title: "EV Parking",
            icon: electricVehicleIcon
        },
        {
            title: "Car Wash",
            icon: carWashIcon
        },
        {
            title: "Vehicle Insurance",
            icon: carInsuranceIcon
        },
        {
            title: "Road Assistance",
            icon: rvHookupIcon
        },
        {
            title: "Pay Challan",
            icon: payChallanIcon
        },
        {
            title: "Toll Estimator",
            icon: tollEstimatorIcon
        },
        {
            title: "Vallet Parking",
            icon: valetParkingIcon
        }
    ],
    Fastag: [
      {
        title:"Buy FASTag",
        Icon:ShoppingBagIcon
      },
      {
        title:"Replace FASTag",
        Icon:PublishedWithChangesIcon
      },
      {
        title:"Active FASTag",
        Icon:DoneAllIcon
      },
      {
        title:"Close FASTag",
        Icon:DisabledByDefaultIcon
      }
    ],
    others:[
      {
        title:"Rentout Helmet",
        Icon:SportsMotorsportsIcon
      },
      {
        title:"Fuel Price",
        Icon:LocalGasStationIcon
      },
      {
        title:"Shop Here",
        Icon:LocalMallIcon
      },
      {
        title:"My Vehicles",
        Icon:DirectionsCarFilledIcon
      }
    ],
    travel:[
      {
        title:"Car Wash",
        icon:carWashIcon,
      },
      {
        title:"Estimate Toll",
        icon:tollEstimatorIcon
      },
      {
        title:"Shop",
        icon:LocalMallIcon
      },
      {
        title:"Protocols",
        icon:TrafficIcon
      }
    ],
    Recharge:[
      {
        title:"Fastag Recharge",
        Icon:NoCrashIcon
      },
      {
        title:"Mobile Recharge",
        Icon:ChargingStationIcon
      },
      {
        title:"Electricity",
        Icon:LightbulbIcon
      },
      {
        title:"Water",
        Icon:WaterDropIcon
      },
      {
        title:"Gas Cylinder",
        Icon:PropaneTankIcon
      },
      {
        title:"Loan Payment",
        Icon:CurrencyRupeeIcon
      },
      {
        title:"DTH",
        Icon:SettingsInputAntennaIcon
      },
      {
        title:"House Rent",
        Icon:HouseIcon
      }
    ],
    offer:[
      {
        title:"Rewards",
        Icon:RedeemIcon
      },
      {
        title:"Discounts",
        Icon:DiscountIcon
      },
      {
        title:"Refer & win",
        Icon:CampaignIcon
      }
    ],
    plans:[
      {
        title:"Monthly Parking",
        description:"Dedicated parking available near you",
        image:carParkingPlanImg
      },
      {
        title:"Elite Car Wash",
        description:"Elite car grooming at your doorstep",
        image:carWashingPlanImg
      }
    ],
    deals:[
      {
        backgroundColor:"linear-gradient(360deg, rgba(59,13,152,1) 35%, rgba(143,118,193,1) 100%)",
        title:"Recharge FASTag",
        description:"& Get Petrol worth &#x20b9;30",
        buttonText:"Recharge Now"
      },
      {
        backgroundColor:"linear-gradient(360deg, rgba(12,149,9,1) 35%, rgba(178,210,178,1) 100%)",
        title:"Get 25% off on",
        description:"on your first car wash",
        buttonText:"Book Now"
      },
      {
        backgroundColor:"linear-gradient(360deg, rgba(149,9,144,1) 35%, rgba(228,152,234,1) 100%)",
        title:"Get 15% off",
        description:"on your first car parking",
        buttonText:"Book Now"
      }
    ]
};