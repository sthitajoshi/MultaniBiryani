import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div
      className={[styles.e2a7b5dc0d21f8cc7757fd57f491ffParent, className].join(
        " "
      )}
    >
      <img
        className={styles.e2a7b5dc0d21f8cc7757fd57f491ffIcon}
        loading="lazy"
        alt=""
        src="/3e2a7b5dc0d21f8cc7757fd57f491ff5-1@2x.png"
      />
      <div className={styles.riceWrapper}>
        <div className={styles.rice}>Rice</div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
