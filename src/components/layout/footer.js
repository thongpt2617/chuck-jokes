import "./footer.scss";
import ArrowLtrIcon from "assets/icon-arrow-ltr.png";

const Footer = () => {
  return (
    <section className="footer">
      <p>got jokes? get paid</p>
      <p>for submitting</p>
      <button>
        <p>submit joke</p>
        <img src={ArrowLtrIcon} alt="icon" />
      </button>
    </section>
  );
};

export default Footer;
