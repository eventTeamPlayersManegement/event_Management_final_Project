import "./generalStyle.scss";
function CustomButton(props) {
  const { submit, style, dispach, active } = props;
  return (
    <button
      onClick={dispach}
      className={style}
      disabled={active === 0 ? true : false}
      style={{ opacity: `${active === 0 ? "0.4" : "1"}` }}
    >
      {submit}
    </button>
  );
}

export default CustomButton;
