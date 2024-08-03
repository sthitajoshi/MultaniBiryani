import PropTypes from "prop-types";
import styles from "./Component.module.css";

const Component = ({ className = "" }) => {
  return (
    <div className={[styles.component3, className].join(" ")}>
      <img className={styles.component3Child} alt="" src="/frame-4@2x.png" />
      <img className={styles.component3Item} alt="" src="/frame-5@2x.png" />
      <img className={styles.component3Inner} alt="" src="/frame-6@2x.png" />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
