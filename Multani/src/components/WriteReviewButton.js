import PropTypes from "prop-types";
import styles from "./WriteReviewButton.module.css";

const WriteReviewButton = ({ className = "" }) => {
  return (
    <div
      className={[styles.writeReviewButtonBackgroundParent, className].join(
        " "
      )}
    >
      <div className={styles.writeReviewButtonBackground} />
      <div className={styles.writeAReview}>WRITE A REVIEW</div>
    </div>
  );
};

WriteReviewButton.propTypes = {
  className: PropTypes.string,
};

export default WriteReviewButton;
