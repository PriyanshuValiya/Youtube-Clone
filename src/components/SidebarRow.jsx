import styles from "../../public/style.module.css";
import { IoMdHome } from "react-icons/io";

function SidebarRow({ title, Icon, selected }) {
    return(
        <>
        <div className={`${styles.sidebarrow} ${selected && styles.selected}`}>
          <Icon className={`${styles.sidebarrow__icon}`}/>
          <h2 className={`${styles.sidebarrow__title}`}>{title}</h2>
        </div>
        </>
    )
}

export default SidebarRow;