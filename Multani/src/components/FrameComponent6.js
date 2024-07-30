import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={[styles.bc05f6d6776b42bd40914e0b077487Parent, className].join(
        " "
      )}
    >
      <img
        className={styles.bc05f6d6776b42bd40914e0b077487Icon}
        loading="lazy"
        alt=""
        src="/bc05f6d6776b42bd40914e0b077487c9-1@2x.png"
      />
      <div className={styles.chickenWrapper}>
        <div className={styles.chicken}>Chicken</div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
