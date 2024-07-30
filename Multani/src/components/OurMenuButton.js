import PropTypes from "prop-types";
import styles from "./OurMenuButton.module.css";

const OurMenuButton = ({ className = "" }) => {
  return (
    <div className={[styles.menuContactLinkParent, className].join(" ")}>
      <div className={styles.menuContactLink} />
      <div className={styles.ourMenu}>OUR MENU</div>
    </div>
  );
};

OurMenuButton.propTypes = {
  className: PropTypes.string,
};

export default OurMenuButton;
