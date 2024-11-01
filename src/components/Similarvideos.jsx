import styles from "../../public/style.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Similarvideos({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const converter = (value) => {
    if(value >= 1000000) {
      return Math.floor(value/1000000) + "M";
    } else if(value >= 1000) {
      return Math.floor(value/1000) + "K";
    } else {
      return value;
    }
  };

  const fetchData = async () => {
    const relatedvideos_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&videoCategoryId=${categoryId}&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`;
    await fetch(relatedvideos_URL)
    .then(res => res.json())
    .then(data => {
      setApiData(data.items);
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

    return(
        <>
         <div className={`${styles.similarvideos}`}>
          {apiData.map((item) => (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
            <div className={`${styles.similarvideos__list}`}>
             <img src={item.snippet.thumbnails.medium.url} alt="" />
             <div className={`${styles.similarvideos__info}`}>
                <h4>{item.snippet.title.slice(0, 30)}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{converter(item.statistics.viewCount)} Views</p>
             </div>
            </div>
          </Link>
          ))}
         </div>
        </>
    )
}

export default Similarvideos;