import PropTypes from "prop-types";
import styles from "./TEAMBanner.module.css";

const TEAMBanner = ({ className = "" }) => {
  return (
    <div className={[styles.team, className].join(" ")}>
      <img
        className={styles.bcd77feef1331310a33c161e0cc002Icon}
        loading="lazy"
        alt=""
        src="/4bcd77feef1331310a33c161e0cc0027-1@2x.png"
      />
      <div className={styles.ourWrapper}>
        <h1 className={styles.our}>our</h1>
      </div>
      <h1 className={styles.team1}>TEAM</h1>
    </div>
  );
};

TEAMBanner.propTypes = {
  className: PropTypes.string,
};

export default TEAMBanner;
