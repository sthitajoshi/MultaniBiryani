import PropTypes from "prop-types";
import styles from "./Content.module.css";
import FrameComponent from "./FrameComponent";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.menuTitleParent}>
        <div className={styles.menuTitle}>
          <div className={styles.ourMenu}>OUR MENU</div>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.cabfcc101fa6f6d99b3c07e9997f7cParent}>
            <img
              className={styles.cabfcc101fa6f6d99b3c07e9997f7cIcon}
              alt=""
              src="/cabfcc101fa6f6d99b3c07e9997f7c47-1@2x.png"
            />
            <div className={styles.menuItemRowTwo}>
              <div className={styles.biryani}>Biryani</div>
            </div>
          </div>
          <div className={styles.e2a7b5dc0d21f8cc7757fd57f491ffParent}>
            <img
              className={styles.e2a7b5dc0d21f8cc7757fd57f491ffIcon}
              alt=""
              src="/3e2a7b5dc0d21f8cc7757fd57f491ff5-1@2x.png"
            />
            <div className={styles.riceWrapper}>
              <div className={styles.rice}>Rice</div>
            </div>
          </div>
          <div className={styles.e2f53738fa30a7e1cc88e61261c33Parent}>
            <img
              className={styles.e2f53738fa30a7e1cc88e61261c33Icon}
              alt=""
              src="/102e2f53738fa30a7e1cc88e61261c33-1@2x.png"
            />
            <div className={styles.muttonWrapper}>
              <div className={styles.mutton}>Mutton</div>
            </div>
          </div>
          <div className={styles.bc05f6d6776b42bd40914e0b077487Parent}>
            <img
              className={styles.bc05f6d6776b42bd40914e0b077487Icon}
              alt=""
              src="/bc05f6d6776b42bd40914e0b077487c9-1@2x.png"
            />
            <div className={styles.chickenWrapper}>
              <div className={styles.chicken}>Chicken</div>
            </div>
          </div>
          <div className={styles.c7228d74b38305bd6c483b4417d749Parent}>
            <img
              className={styles.c7228d74b38305bd6c483b4417d749Icon}
              alt=""
              src="/9c7228d74b38305bd6c483b4417d749c-1@2x.png"
            />
            <div className={styles.pannerWrapper}>
              <div className={styles.chicken}>Panner</div>
            </div>
          </div>
          <FrameComponent
            db17641d31c172d2b2739daf9="/db17641d31c172d2b2739daf968caf86-1@2x.png"
            mushroom="Mushroom"
          />
          <div className={styles.c0566b8ce26a85119cb9dbaff7221bParent}>
            <img
              className={styles.c0566b8ce26a85119cb9dbaff7221bIcon}
              alt=""
              src="/c0566b8ce26a85119cb9dbaff7221bd4-1@2x.png"
            />
            <div className={styles.mixVegWrapper}>
              <div className={styles.chicken}>Mix Veg</div>
            </div>
          </div>
          <div className={styles.ea95a51eec22af22d0c30e56f9823Parent}>
            <img
              className={styles.ea95a51eec22af22d0c30e56f9823Icon}
              alt=""
              src="/356ea95a51eec22af22d0c30e56f9823-1@2x.png"
            />
            <div className={styles.breadWrapper}>
              <div className={styles.chicken}>Bread</div>
            </div>
          </div>
          <div className={styles.chirerPayeshPohaPuddingRecParent}>
            <img
              className={styles.chirerPayeshPohaPuddingRecIcon}
              alt=""
              src="/chirerpayeshpohapuddingrecipewithnolengur-1@2x.png"
            />
            <div className={styles.chickenWrapper}>
              <div className={styles.chicken}>Dessert</div>
            </div>
          </div>
          <FrameComponent
            db17641d31c172d2b2739daf9="/21033241cec90baa0f32f80373d70a61-1@2x.png"
            mushroom="Soft Drinks"
          />
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
