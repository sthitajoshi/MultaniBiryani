import PropTypes from "prop-types";
import styles from "./WriteQueriesBlock.module.css";

const WriteQueriesBlock = ({ className = "" }) => {
  return (
    <div className={[styles.footerFormBackgroundParent, className].join(" ")}>
      <div className={styles.footerFormBackground} />
      <img
        className={styles.userCicrleIcon}
        loading="lazy"
        alt=""
        src="/user-cicrle.svg"
      />
      <div className={styles.footerFormLabel}>
        <div className={styles.writeYourQueries}>WRITE YOUR QUERIES</div>
      </div>
    </div>
  );
};

WriteQueriesBlock.propTypes = {
  className: PropTypes.string,
};

export default WriteQueriesBlock;
