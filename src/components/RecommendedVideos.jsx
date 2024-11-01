import { useEffect, useState } from "react";
import styles from "../../public/style.module.css";
import Categoriesbar from "../components/Categoriesbar";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import moment from 'moment';

function RecommendedVideos() {
  const [data, setData] = useState([]);
  const [vid, setVid] = useState(0);
  const [channelData, setChannelData] = useState(null);

  let getId = (id) => {
    setVid(id);
  };

  const converter = (value) => {
    if(value >= 1000000) {
      return Math.floor(value/1000000) + "M";
    } else if(value >= 1000) {
      return Math.floor(value/1000) + "K";
    } else {
      return value;
    }
  };

  const fetchData = async (vid) => {
    const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${vid}&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`;
    await fetch(videoList_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  };
  
  // const fetchChannelData = async () => {
  //   const channeldetails_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`;
  //   await fetch(channeldetails_URL)
  //   .then(res => res.json())
  //   .then(data => {
  //     setChannelData(data.items[0]);
  //   });
  // };

  useEffect(() => {
    fetchData(vid);
  }, [vid]);

  // useEffect(() => {
  //   fetchChannelData();
  // }, []);

  return (
    <>
      <div className={`${styles.recommendedvideos}`}>
          <Categoriesbar getter={getId}/>
          <br />

          <div className={`${styles.recommendedvideos__videos}`}>
            {data.map((item) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
                <VideoCard
                  title={item.snippet.title}
                  image={item.snippet.thumbnails.medium.url}
                  channel={item.snippet.channelTitle}
                  views={converter(item.statistics.viewCount)}
                  timestamp={moment(item.snippet.publishedAt).fromNow()}
                  channelImage={item.snippet.thumbnails.default.url}
                />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default RecommendedVideos;