import styles from "../../public/style.module.css";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import Button from "@mui/material/Button";
import Similarvideos from "./Similarvideos";
import { useEffect, useState } from "react";
import moment from 'moment';
import { useParams } from "react-router-dom";

function PlayVideo({ categoryId }) {
  const { id } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const converter = (value) => {
    if(value >= 1000000) {
      return Math.floor(value/1000000) + "M";
    } else if(value >= 1000) {
      return Math.floor(value/1000) + "K";
    } else {
      return value;
    }
  };

  const fetchVideoData = async () => {
    const videodetails_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`;
    await fetch(videodetails_URL)
    .then(res => res.json())
    .then(data => {
      setApiData(data.items[0]);
    })
  };

  const fetchChannelData = async () => {
    const channeldetails_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`;
    await fetch(channeldetails_URL)
    .then(res => res.json())
    .then(data => {
      setChannelData(data.items[0]);
    });
  };

  const fetchComments = async () => {
    const comments_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${id}&key=AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU`;
    await fetch(comments_URL)
    .then(res => res.json())
    .then(data => {
      setCommentData(data.items);
    });
  }

  useEffect(() => {
    fetchVideoData();
  }, [id]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);

  useEffect(() => {
      fetchComments();
  }, [apiData]);

  return (
    <>
      <div className={`${styles.playvideo}`}>
        <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData ? apiData.snippet.title : "Video Title"}</h3>
        <div className={`${styles.playvideo__info}`}>
          <p>{apiData ? converter(apiData.statistics.viewCount) : "41K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
          <div className={`${styles.playvideo__spans}`}>
            <span><GrLike />&nbsp; {apiData ? converter(apiData.statistics.likeCount) : 141}</span>&nbsp; 
            <span><GrDislike /></span>
          </div>
        </div>
        <hr />

        <div className={`${styles.playvideo__publisher}`}>
          <img
            src={channelData ? channelData.snippet.thumbnails.default.url : ""}
            alt=""
          />
          <div>
            <p>{apiData ? apiData.snippet.channelTitle : "Priyanshu Valiya"}</p>
            <span>{channelData ? converter(channelData.statistics.subscriberCount) : "1.3M"} Subscribers</span>
          </div>
          <Button variant="contained" color="error">
            Subscribe
          </Button>
        </div>
        <hr />

        <div className={`${styles.playvideo__decs}`}>
          <p><b>Video Discription : </b>{apiData ? apiData.snippet.description.slice(0, 300) : ""}</p>
          <hr />

          <div className={`${styles.playvideo__abc}`}>
            <div className={`${styles.playvideo__comments}`}>
              <h2>Comment Section</h2>
              <div className={`${styles.playvideo__comment}`}>
                {commentData.map((item) => (
                  <div className={`${styles.playvideo__coment}`}>
                  <div className={`${styles.playvideo__comentimg}`}>
                  <img
                  src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                  alt=""
                />
                </div>
                <div>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName} | <span>1 day ago</span>
                  </h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className={`${styles.playvideo__commentaction}`}>
                    <GrLike />&nbsp;
                    <span>{converter(item.snippet.topLevelComment.snippet.likeCount)}</span>&nbsp;&nbsp;&nbsp;
                    <GrDislike />
                  </div>
                  </div>
                </div>
                ))}
              </div>
              
            </div>

            <div className={`${styles.playvideo__more}`}>
              <h2>More Videos Like This...</h2><br />
              <Similarvideos categoryId={categoryId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayVideo;
