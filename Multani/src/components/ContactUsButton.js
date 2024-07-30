import PropTypes from "prop-types";
import styles from "./ContactUsButton.module.css";

const ContactUsButton = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.instanceChild} />
      <div className={styles.contactUs}>CONTACT US</div>
    </div>
  );
};

ContactUsButton.propTypes = {
  className: PropTypes.string,
};

export default ContactUsButton;
