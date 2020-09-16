import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import StoreIcon from "@material-ui/icons/Store";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Sidebar() {
  return (
    <div>
      <SidebarRow
        src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
        title="Muhammet Varol"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Bilgi Merkezi" />
      <SidebarRow Icon={SupervisorAccountIcon} title="Arkdaşlar" />
      <SidebarRow Icon={PeopleOutlineIcon} title="Gruplar" />
      <SidebarRow Icon={StoreIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videolar" />
      <SidebarRow Icon={LocalActivityIcon} title="Etkinlikler" />
      <SidebarRow Icon={BookmarkIcon} title="Kaydedilenler" />
      <SidebarRow Icon={ExpandMoreIcon} title="Daha Fazla Gör" />
    </div>
  );
}

export default Sidebar;
