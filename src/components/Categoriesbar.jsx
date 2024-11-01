import { useState } from "react";
import styles from "../../public/style.module.css";
import Fab from '@mui/material/Fab';

function Categoriesbar({ getter }) {
    const keywords = [
        {category: "All" , id: 0},
        {category: "Gamimg" , id: 20},
        {category: "Automobiles" , id: 2},
        {category: "Sports" , id: 17},
        {category: "Entertainment" , id: 24},
        {category: "Technology" , id: 28},
        {category: "Music" , id: 10},
        {category: "Blogs" , id:22},
        {category: "News" , id:25},
        {category: "Shorts" , id:26},
        {category: "Popular" , id:1},
    ]

    const [active, setActive] = useState(keywords[0].category);

    const handleOnClick = (keyword) => {
        setActive(keyword.category);
        getter(keyword.id);
    }

    return(
        <>
        <div className={`${styles.categoriesbar}`}>
        {keywords.map((keyword) => 
            <Fab variant="extended" size="small" className={active === keyword.category ? `${styles.categoriesbar__active}` : `${styles.categoriesbar__span}`} key={keyword.id} onClick={() => handleOnClick(keyword)}>{keyword.category}</Fab>
        )}
        </div>
        </>
    )
}

export default Categoriesbar;