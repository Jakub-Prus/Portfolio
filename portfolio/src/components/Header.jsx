import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AppsIcon from "@mui/icons-material/Apps";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DescriptionIcon from "@mui/icons-material/Description";
import CodeIcon from "@mui/icons-material/Code";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="w-full border-b-[1px] border-gray-400">
      <div className="flex-row flex justify-around items-center h-13">
        <HeaderItem Icon={CodeIcon} text="Jakub Prus" />

        <div className="flex-row flex md:space-x-16 space-x-0">
          <HeaderItem Icon={BookmarkIcon} text="Skills" />
          <HeaderItem Icon={AppsIcon} text="Projects" />
          <HeaderItem Icon={BusinessCenterIcon} text="Experiences" />
          <HeaderItem Icon={DescriptionIcon} text="Resume" />
          <HeaderItem Icon={LightModeIcon} text="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
