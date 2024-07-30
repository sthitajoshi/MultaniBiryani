import MultaniBiryaniHeader from "../MultaniBiryaniHeader";
import Content from "../components/Content";
import GalleryHeader from "../components/GalleryHeader";
import WriteReviewButton from "../components/WriteReviewButton";
import TEAMBanner from "../components/TEAMBanner";
import WriteQueriesBlock from "../WriteQueriesBlock";
import styles from "./FullScreen.module.css";

const FullScreen = () => {
  return (
    <div className={styles.fullScreen}>
      <MultaniBiryaniHeader />
      <Content />
      <div className={styles.offerWrapper}>
        <div className={styles.offer}>
          <img
            className={styles.offerSection1}
            alt=""
            src="/offer-section-1@2x.png"
          />
          <img
            className={styles.cabfcc101fa6f6d99b3c07e9997f7cIcon}
            loading="lazy"
            alt=""
            src="/cabfcc101fa6f6d99b3c07e9997f7c47-1-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.hereAreSomeContainer}>
        <p
          className={styles.hereAreSome}
        >{`Here are some of the extravagant pictures `}</p>
        <p className={styles.hereAreSome}>
          of our restaurant which you must admire.
        </p>
      </div>
      <main className={styles.galleryContentParent}>
        <section className={styles.galleryContent}>
          <GalleryHeader />
          <div className={styles.testimonialContentParent}>
            <div className={styles.testimonialContent}>
              <div className={styles.ppls}>
                <div className={styles.testimonialQuestion}>
                  <h3
                    className={styles.whyPeoplesChoose}
                  >{`Why Peoples Choose Us ? `}</h3>
                </div>
                <div className={styles.testimonialImage}>
                  <img
                    className={styles.cameraSparklesUndefined}
                    loading="lazy"
                    alt=""
                    src="/camera-sparkles--undefined--glyph-undefined.svg"
                  />
                </div>
                <div className={styles.testimonialHeaderItems}>
                  <div className={styles.ambience}>Ambience</div>
                </div>
                <div className={styles.testimonialDescription}>
                  <div className={styles.relaxInStyle}>
                    RELAX IN STYLE AT OUR CAFÉ. CHOOSE A COZY SPOT, SIP YOUR
                    FAVORITE DRINK, AND SAVOR THE WELCOMING AMBIANCE WE OFFEr
                  </div>
                </div>
                <div className={styles.testimonialImage}>
                  <img
                    className={styles.peopleUndefinedGlyphUn}
                    loading="lazy"
                    alt=""
                    src="/people--undefined--glyph-undefined.svg"
                  />
                </div>
                <div className={styles.testimonialHeaderItems}>
                  <div className={styles.hospitality}>Hospitality</div>
                </div>
                <div className={styles.dedicatedTeamElevatingContainer}>
                  <p
                    className={styles.hereAreSome}
                  >{`DEDICATED TEAM, ELEVATING YOUR CAFE EXPERIENCE WITH EXCEPTIONAL SERVICE, WARMTH, AND A PASSION `}</p>
                  <p className={styles.hereAreSome}>FOR HOSPITALITY</p>
                </div>
                <img
                  className={styles.foodCakeUndefinedGlyph}
                  loading="lazy"
                  alt=""
                  src="/food-cake--undefined--glyph-undefined.svg"
                />
                <div className={styles.testimonialHeaderItems}>
                  <div className={styles.delights}>Delights</div>
                </div>
                <div className={styles.sensationalFlavorsAnd}>
                  SENSATIONAL FLAVORS AND CULINARY MASTERY UNITE IN ICONIC
                  DELIGHTS, CREATING AN UNFORGETTABLE DINING for all
                </div>
              </div>
            </div>
            <div className={styles.reviewContentWrapper}>
              <div className={styles.reviewContent}>
                <div className={styles.reviewTitle}>
                  <div className={styles.reviewHeading}>
                    <h3 className={styles.whyPeoplesChoose}>
                      What Our Visitors Says
                    </h3>
                  </div>
                  <div className={styles.reviewStars}>
                    <div className={styles.androidSmall8} />
                    <div className={styles.androidSmall8} />
                    <div className={styles.androidSmall8} />
                    <div className={styles.androidSmall8} />
                  </div>
                </div>
                <div className={styles.testimonialHeaderItems}>
                  <WriteReviewButton />
                </div>
              </div>
            </div>
            <div className={styles.teamWrapper}>
              <TEAMBanner />
            </div>
            <div className={styles.footer}>
              <div className={styles.footerContent}>
                <nav className={styles.footerAddress}>
                  <div className={styles.footerAddressItems}>
                    <div className={styles.footerAddressSeparator}>4.5+</div>
                  </div>
                  <div className={styles.footerAddressItems1}>
                    <div className={styles.div}>100+</div>
                  </div>
                  <div className={styles.div1}>2000+</div>
                </nav>
                <div className={styles.footerContact}>
                  <div className={styles.footerRating}>
                    <div className={styles.footerRatingContent}>
                      <h1 className={styles.google}>
                        <span>G</span>
                        <span className={styles.o}>o</span>
                        <span className={styles.o1}>o</span>
                        <span>g</span>
                        <span className={styles.l}>l</span>
                        <span className={styles.o}>e</span>
                      </h1>
                      <div className={styles.ratings}>Ratings</div>
                    </div>
                    <div className={styles.footerCustomerCount}>
                      <h1 className={styles.reviews}>Reviews</h1>
                      <h1 className={styles.customers}>Customers</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <iframe className={styles.footerAppStore} />
            <footer className={styles.footerBranding}>
              <div className={styles.footerLogo}>
                <img
                  className={styles.multaniBiryaniMainLogo1}
                  loading="lazy"
                  alt=""
                  src="/multani-biryani-main-logo-1-1@2x.png"
                />
              </div>
              <div className={styles.footerForm}>
                <WriteQueriesBlock />
                <div className={styles.footerSocial}>
                  <div className={styles.footerSocialIcons}>
                    <img
                      className={styles.socialIcons}
                      loading="lazy"
                      alt=""
                      src="/social-icons.svg"
                    />
                    <img
                      className={styles.socialIcons1}
                      loading="lazy"
                      alt=""
                      src="/social-icons-1.svg"
                    />
                    <img
                      className={styles.socialIcons2}
                      loading="lazy"
                      alt=""
                      src="/social-icons-2.svg"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
        <section className={styles.footer1}>
          <h1 className={styles.photo}>photo</h1>
          <div className={styles.androidSmall5Wrapper}>
            <textarea className={styles.androidSmall5} rows={10} cols={18} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FullScreen;
