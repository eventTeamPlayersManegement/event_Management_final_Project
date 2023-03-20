import video from "../../assets/video3.mp4";

const Video = () => {
  return (
    <video width="100%" height="920px" controls autoPlay muted replay>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Video;
