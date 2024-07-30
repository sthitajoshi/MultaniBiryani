import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={[styles.e2f53738fa30a7e1cc88e61261c33Parent, className].join(
        " "
      )}
    >
      <img
        className={styles.e2f53738fa30a7e1cc88e61261c33Icon}
        alt=""
        src="/102e2f53738fa30a7e1cc88e61261c33-1@2x.png"
      />
      <div className={styles.muttonWrapper}>
        <div className={styles.mutton}>Mutton</div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
