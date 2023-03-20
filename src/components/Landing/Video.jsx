import video from "../../assets/video4.mp4";
const Video = () => {
  return (
    <video width="100%" height="100%" controls autoPlay>
      <source src={video} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;
