import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.menuTitleParent}>
        <div className={styles.menuTitle}>
          <h1 className={styles.ourMenu}>OUR MENU</h1>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.cabfcc101fa6f6d99b3c07e9997f7cParent}>
            <img
              className={styles.cabfcc101fa6f6d99b3c07e9997f7cIcon}
              loading="lazy"
              alt=""
              src="/cabfcc101fa6f6d99b3c07e9997f7c47-1@2x.png"
            />
            <div className={styles.menuItemRowTwo}>
              <div className={styles.biryani}>Biryani</div>
            </div>
          </div>
          <FrameComponent8 />
          <FrameComponent7 />
          <FrameComponent6 />
          <div className={styles.c7228d74b38305bd6c483b4417d749Parent}>
            <img
              className={styles.c7228d74b38305bd6c483b4417d749Icon}
              loading="lazy"
              alt=""
              src="/9c7228d74b38305bd6c483b4417d749c-1@2x.png"
            />
            <div className={styles.pannerWrapper}>
              <div className={styles.panner}>Panner</div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.db17641d31c172d2b2739daf968cafWrapper}>
              <img
                className={styles.db17641d31c172d2b2739daf968cafIcon}
                loading="lazy"
                alt=""
                src="/db17641d31c172d2b2739daf968caf86-1@2x.png"
              />
            </div>
            <div className={styles.mushroom}>Mushroom</div>
          </div>
          <FrameComponent4 />
          <div className={styles.ea95a51eec22af22d0c30e56f9823Parent}>
            <img
              className={styles.ea95a51eec22af22d0c30e56f9823Icon}
              loading="lazy"
              alt=""
              src="/356ea95a51eec22af22d0c30e56f9823-1@2x.png"
            />
            <div className={styles.breadWrapper}>
              <div className={styles.panner}>Bread</div>
            </div>
          </div>
          <div className={styles.chirerPayeshPohaPuddingRecParent}>
            <img
              className={styles.chirerPayeshPohaPuddingRecIcon}
              alt=""
              src="/chirerpayeshpohapuddingrecipewithnolengur-1@2x.png"
            />
            <div className={styles.dessertWrapper}>
              <div className={styles.panner}>Dessert</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.cec90baa0f32f80373d70a611Wrapper}>
              <img
                className={styles.cec90baa0f32f80373d70a611Icon}
                alt=""
                src="/21033241cec90baa0f32f80373d70a61-1@2x.png"
              />
            </div>
            <div className={styles.mushroom}>Soft Drinks</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
