import PropTypes from "prop-types";
import styles from "./MainFrame.module.css";

const MainFrame = ({ className = "" }) => {
  return (
    <div className={[styles.mainFrame, className].join(" ")}>
      <img
        className={styles.bb7947c94b51760e467704378fe81Icon}
        alt=""
        src="/6087bb7947c94b51760e467704378fe8-1@2x.png"
      />
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            className={styles.multaniBiryaniMainLogo1}
            alt=""
            src="/multani-biryani-main-logo-1@2x.png"
          />
          <div className={styles.brandName}>
            <div className={styles.multani}>MULTANI</div>
            <div className={styles.biryani}>BIRYANI</div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.menuNavigation}>
              <div className={styles.menuLinks}>
                <div className={styles.menuContact}>
                  <div className={styles.menuContactLinkParent}>
                    <div className={styles.menuContactLink} />
                    <div className={styles.ourMenu}>OUR MENU</div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.instanceChild} />
                    <div className={styles.contactUs}>CONTACT US</div>
                  </div>
                </div>
              </div>
              <div className={styles.experienceAVibrant}>
                Experience a vibrant and extraordinary hotspot in the city of
                Bhubaneswar !
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.lineHorizontal3}
        alt=""
        src="/line-horizontal-3.svg"
      />
    </div>
  );
};

MainFrame.propTypes = {
  className: PropTypes.string,
};

export default MainFrame;
