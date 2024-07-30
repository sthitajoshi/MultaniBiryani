import PropTypes from "prop-types";
import styles from "./PhotoGalleryButton.module.css";

const PhotoGalleryButton = ({ className = "" }) => {
  return (
    <div
      className={[styles.galleryNavigationButtonBackParent, className].join(
        " "
      )}
    >
      <div className={styles.galleryNavigationButtonBack} />
      <div className={styles.moreShots}>MORE SHOTS</div>
    </div>
  );
};

PhotoGalleryButton.propTypes = {
  className: PropTypes.string,
};

export default PhotoGalleryButton;
