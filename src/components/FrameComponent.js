import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  db17641d31c172d2b2739daf9,
  mushroom,
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.db17641d31c172d2b2739daf968cafWrapper}>
        <img
          className={styles.db17641d31c172d2b2739daf968cafIcon}
          alt=""
          src={db17641d31c172d2b2739daf9}
        />
      </div>
      <div className={styles.mushroom}>{mushroom}</div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  db17641d31c172d2b2739daf9: PropTypes.string,
  mushroom: PropTypes.string,
};

export default FrameComponent;
