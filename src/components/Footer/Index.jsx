import footer from "../../content/data.json";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <p className="footerContent">{footer.footer.copyright}</p>
    </div>
  );
}

export default Footer;
