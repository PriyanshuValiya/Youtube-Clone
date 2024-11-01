import styles from "../../public/style.module.css";
import SidebarRow from "../components/SidebarRow";
import { FaChevronRight } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoIosPhotos } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className={`${styles.sidebar}`}>
      <Link to={"/"}><SidebarRow title="Home" Icon={IoMdHome} selected /></Link>
      <SidebarRow title="Trending" Icon={FaFire} />
      <SidebarRow title="Subscription" Icon={MdSubscriptions} />
      <hr /><br />
      
      <h3>&nbsp;&nbsp; You <FaChevronRight /></h3>
      <SidebarRow title="Your Channel" Icon={GrChannel} />
      <SidebarRow title="History" Icon={FaHistory} />
      <SidebarRow title="Playlists" Icon={BiSolidPlaylist} />
      <SidebarRow title="Your Videos" Icon={IoIosPhotos} />
      <SidebarRow title="Watch Later" Icon={FaRegClock} />
      <SidebarRow title="Liked Videos" Icon={AiOutlineLike} />
      <hr />
      </div>
    </>
  );
}

export default Sidebar;
