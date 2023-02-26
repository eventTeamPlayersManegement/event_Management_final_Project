import "./generalStyle.scss";
function CustomButton(props) {
  const { submit, style } = props;
  return <button className={style}>{submit}</button>;
}

export default CustomButton;
