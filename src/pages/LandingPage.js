import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <img
        className={styles.backgroundVectors}
        alt=""
        src="/background--vectors.svg"
      />
      <div className={styles.footer}>
        <div className={styles.abbvieInc}>
          © 2021 AbbVie Inc. . All rights reserved
        </div>
        <div className={styles.contactHeading}>
          <div className={styles.contact}>Contact.</div>
          <div className={styles.truthIsA}>
            Truth is a deep kindness that teaches us to be content in our
            everyday life and share with the people the same happiness. the
            feeling of sunday is the same everywhere: heavy, melancholy,
            standing still.
          </div>
        </div>
        <img className={styles.socialIcons} alt="" src="/social-icons.svg" />
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
      </div>
      <div className={styles.portfolio}>
        <div className={styles.portfolioHeading}>
          <div className={styles.ourRegurlarUpdated}>Our Regurlar Updated</div>
          <div className={styles.portfolio1}>Portfolio.</div>
        </div>
        <div className={styles.portfolioImages}>
          <img
            className={styles.unsplashndd3dikkoloIcon}
            alt=""
            src="/unsplashndd3dikkolo@2x.png"
          />
          <img
            className={styles.unsplashpxypfiqmkikIcon}
            alt=""
            src="/unsplashpxypfiqmkik@2x.png"
          />
          <img
            className={styles.unsplash3pr7dTirx8Icon}
            alt=""
            src="/unsplash3pr7dtirx8@2x.png"
          />
          <img
            className={styles.unsplash9ickpsq9g5qIcon}
            alt=""
            src="/unsplash9ickpsq9g5q@2x.png"
          />
          <img
            className={styles.unsplashefx1g5d9t3iIcon}
            alt=""
            src="/unsplashefx1g5d9t3i@2x.png"
          />
        </div>
      </div>
      <div className={styles.contributors}>
        <div className={styles.contributorHeading}>
          <div className={styles.contributors1}>
            <span>Contributors</span>
            <span className={styles.span}>.</span>
          </div>
          <div className={styles.theySupportProducts}>
            They support products that simplify and automate decent mechanic
            processes saving time for activities.
          </div>
        </div>
        <div className={styles.displayLogos}>
          <img className={styles.behanceIcon} alt="" src="/behance@2x.png" />
          <img className={styles.behanceIcon1} alt="" src="/behance1@2x.png" />
          <img className={styles.behanceIcon2} alt="" src="/behance2@2x.png" />
          <img className={styles.behanceIcon3} alt="" src="/behance3@2x.png" />
          <img className={styles.behanceIcon4} alt="" src="/behance4@2x.png" />
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.servicesHeading}>
          <div className={styles.services1}>
            <span>Services</span>
            <span className={styles.span}>.</span>
          </div>
          <div className={styles.theySupportProducts}>
            Our team members are experts in all facets of the design industry
            including: print design, illustration, branding, identity and more.
          </div>
        </div>
        <div className={styles.card1}>
          <img className={styles.firstIcon} alt="" src="/first-icon.svg" />
          <div className={styles.titleDescription}>
            <div className={styles.uiuxDesign}>UI/UX Design</div>
            <div className={styles.whyMoneysInContainer}>
              <p
                className={styles.whyMoneysIn}
              >{`Why money's in that office, `}</p>
              <p
                className={styles.whyMoneysIn}
              >{`right If she start giving me `}</p>
              <p
                className={styles.whyMoneysIn}
              >{`some bullshit about it ain't `}</p>
              <p className={styles.whyMoneysIn}>there someplace or anywhere.</p>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <img className={styles.firstIcon} alt="" src="/second-icon.svg" />
          <div className={styles.titleDescription}>
            <div className={styles.webDesign}>Web Design</div>
            <div className={styles.whyMoneysInContainer1}>
              <p
                className={styles.whyMoneysIn}
              >{`Why money's in that office, `}</p>
              <p
                className={styles.whyMoneysIn}
              >{`right If she start giving me `}</p>
              <p
                className={styles.whyMoneysIn}
              >{`some bullshit about it ain't `}</p>
              <p className={styles.whyMoneysIn}>there someplace or anywhere.</p>
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <img className={styles.firstIcon} alt="" src="/third-icon.svg" />
          <div className={styles.titleDescription}>
            <div className={styles.wpDeveloping}>WP Developing</div>
            <div className={styles.whyMoneysInContainer}>
              <p
                className={styles.whyMoneysIn}
              >{`Why money's in that office, `}</p>
              <p
                className={styles.whyMoneysIn}
              >{`right If she start giving me `}</p>
              <p
                className={styles.whyMoneysIn}
              >{`some bullshit about it ain't `}</p>
              <p className={styles.whyMoneysIn}>there someplace or anywhere.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <img
          className={styles.abstractBackgroundModel}
          alt=""
          src="/abstract-background-model.svg"
        />
        <img className={styles.imageModelIcon} alt="" src="/image-model.svg" />
        <div className={styles.aboutHeading}>
          <div className={styles.aboutMe1}>
            <span>About me</span>
            <span className={styles.span}>.</span>
          </div>
          <div className={styles.theySupportProducts}>
            I'm Justin Vaccaro and i do web design, Graphic Design, User
            Experiences. habitant et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
            amet.
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerBackground} />
        <div className={styles.navBar}>
          <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
          <div className={styles.navigaitonItems}>
            <div className={styles.homeActive}>
              <div className={styles.home}>Home</div>
              <div className={styles.homeActiveChild} />
            </div>
            <div className={styles.contributors2}>Contributors</div>
            <div className={styles.aboutMe2}>About me</div>
            <div className={styles.services2}>Services</div>
            <div className={styles.portfolio2}>Portfolio</div>
            <div className={styles.contact1}>Contact</div>
          </div>
          <div className={styles.portfolioBtn}>
            <div className={styles.portfolioBtnChild} />
            <div className={styles.portfolioHere}>Portfolio Here</div>
          </div>
          <img
            className={styles.headerImageView}
            alt=""
            src="/header-image-view.svg"
          />
        </div>
        <div className={styles.headerDetails}>
          <div className={styles.title}>
            <div className={styles.holaImJustinContainer}>
              <p className={styles.whyMoneysIn}>
                <span>
                  <span className={styles.holaIm1}>Hola! I’m</span>
                </span>
              </p>
              <p className={styles.blankLine}>
                <span className={styles.blankLine1}>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.justinVaccaro}>
                <span className={styles.blankLine1}>
                  <span>Justin Vaccaro</span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.proffession}>
            <div className={styles.creative}>Creative</div>
            <div className={styles.designer}>Designer</div>
            <div className={styles.proffessionChild} />
          </div>
          <div className={styles.description}>
            <div className={styles.sinceCreativeDesigners}>
              Since creative designers often interact with creative teams,
              managers and clients, they need strong communication skills.
            </div>
          </div>
          <img
            className={styles.socialLinksIcon}
            alt=""
            src="/social-icons.svg"
          />
          <div className={styles.cvBtn}>
            <div className={styles.cvBtnChild} />
            <div className={styles.cvHere}>CV Here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
