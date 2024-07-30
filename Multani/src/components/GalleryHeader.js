import PhotoGalleryButton from "./PhotoGalleryButton";
import PropTypes from "prop-types";
import styles from "./GalleryHeader.module.css";

const GalleryHeader = ({ className = "" }) => {
  return (
    <div className={[styles.galleryHeader, className].join(" ")}>
      <img
        className={styles.c8a7c3a22a8f1e23c11bfe498146f2Icon}
        loading="lazy"
        alt=""
        src="/c8a7c3a22a8f1e23c11bfe498146f2d6-1@2x.png"
      />
      <div className={styles.galleryTitleContainer}>
        <div className={styles.galleryTitle}>
          <h1 className={styles.gallery}>GALLERY</h1>
          <div className={styles.galleryNavigation}>
            <PhotoGalleryButton />
          </div>
        </div>
      </div>
      <img
        className={styles.c8a7c3a22a8f1e23c11bfe498146f2Icon}
        loading="lazy"
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
