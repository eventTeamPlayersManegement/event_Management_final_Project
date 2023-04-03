import video from "../../assets/video/video3.mp4";
import video1 from "../../assets/video/video1.mp4";

const Video = () => {
  return (
    <video width="100%" height="880px" autoPlay muted controls={false}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
