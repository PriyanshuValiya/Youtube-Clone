import styles from "../../public/style.module.css";
import PlayVideo from "./PlayVideo";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { id, categoryid } = useParams();

    return(
        <>
        <div className={`${styles.videopage}`}>
        <PlayVideo categoryId={categoryid} />
        </div>
        </>
    )
}

export default VideoPage;