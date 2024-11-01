import { IoMenuSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import styles from "../../public/style.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ sidebar, setSidebar }) {
  const [inputSearch, setInputSearch] = useState("");

  const handleOnClick = () => {
    setSidebar(!sidebar);
  }

  const handleOnChange = (event) => {
    setInputSearch(event.target.value);
  }

  return (
    <>
      <div className={`${styles.header}`}>
        <div className={`${styles.header__left}`}>
          <IoMenuSharp onClick={handleOnClick}/>
          <Link to={"/"}>
           <img
             className={`${styles.header__logo}`}
             src="https://i.pinimg.com/originals/46/dd/91/46dd9133547bbaab4209fb5d0d06ae98.jpg"
             alt="YouTube_Logo"
           />
          </Link>
        </div>

        <div className={`${styles.header__input}`}>
          <input value={inputSearch} onChange={handleOnChange} type="text" placeholder="Search..."/>
          <FaSearch className={`${styles.header__inputBtn}`}/>
        </div>

        <div className={`${styles.header__icons}`}>
          <MdVideoCall className={`${styles.header__icon}`}/>
          <CgMenuGridO className={`${styles.header__icon}`}/>
          <IoMdNotificationsOutline className={`${styles.header__icon}`}/>
          <IoPerson className={`${styles.header__left}`}/>
        </div>

      </div>
    </>
  );
}

export default Header;
