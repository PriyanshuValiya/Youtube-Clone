import styles from "../../public/style.module.css";
import Avatar from "@mui/material/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <>
      <div className={`${styles.videoCard}`}>
        <div>
          <img className={`${styles.videoCard__thumbnail}`} src={image} alt="" />
          <div className={`${styles.videoCard__info}`}>
            <Avatar className={`${styles.videoCard__avatar}`} src={channelImage} alt={channel}/>
            <div className={`${styles.videoCard__text}`}>
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>
                {views} &bull; {timestamp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
