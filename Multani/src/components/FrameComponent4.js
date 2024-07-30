import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={[styles.c0566b8ce26a85119cb9dbaff7221bParent, className].join(
        " "
      )}
    >
      <img
        className={styles.c0566b8ce26a85119cb9dbaff7221bIcon}
        loading="lazy"
        alt=""
        src="/c0566b8ce26a85119cb9dbaff7221bd4-1@2x.png"
      />
      <div className={styles.mixVegWrapper}>
        <div className={styles.mixVeg}>Mix Veg</div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
