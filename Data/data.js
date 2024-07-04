import { Home } from "@mui/icons-material";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

export const navdata = [
  {
    imgURL: <Home />,
    route: "#courses",
    label: "Courses",
  },
  {
    imgURL: <WifiTetheringIcon />,
    route: "/about",
    label: "About",
  },
  {
    imgURL: <AutoStoriesIcon />,
    route: "#our-mandate",
    label: "Our Mandate",
  },
  {
    imgURL: <LocalLibraryIcon/>,
    route: "#modules",
    label: "Modules",
  },
  {
    imgURL: <LocalLibraryIcon/>,
    route: "#faq",
    label: "FAQ",
  },
];
