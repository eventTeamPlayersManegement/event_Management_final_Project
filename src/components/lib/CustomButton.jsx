import "./generalStyle.scss";
function CustomButton(props) {
  const { submit, style, dispach } = props;
  return (
    <button onClick={dispach} className={style}>
      {submit}
    </button>
  );
}

export default CustomButton;
