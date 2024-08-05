import PropTypes from "prop-types";
import styles from "./GalleryHeader.module.css";

const GalleryHeader = ({ className = "" }) => {
  return (
    <div className={[styles.galleryHeader, className].join(" ")}>
      <img
        className={styles.c8a7c3a22a8f1e23c11bfe498146f2Icon}
        alt=""
        src="/c8a7c3a22a8f1e23c11bfe498146f2d6-1@2x.png"
      />
      <div className={styles.galleryTitleContainer}>
        <div className={styles.photo}>Photo</div>
        <div className={styles.galleryTitle}>
          <div className={styles.gallery}>GALLERY</div>
          <div className={styles.galleryNavigation}>
            <div className={styles.galleryNavigationButtonBackParent}>
              <div className={styles.galleryNavigationButtonBack} />
              <div className={styles.moreShots}>MORE SHOTS</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.c8a7c3a22a8f1e23c11bfe498146f2Icon}
        alt=""
        src="/d12724d4874d218fa3a85fda448d1b7d-1@2x.png"
      />
    </div>
    
  );
};

GalleryHeader.propTypes = {
  className: PropTypes.string,
};

export default GalleryHeader;
