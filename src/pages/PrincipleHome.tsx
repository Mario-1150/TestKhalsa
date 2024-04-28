import { FunctionComponent, useCallback } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import styles from "./PrincipleHome.module.css";

const PrincipleHome: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGetStartedNowClick = useCallback(() => {
    navigate("/3-getting-startedupload");
  }, [navigate]);

  return (
    <div className={styles.principleHome}>
      <FrameComponent4 />
      <FrameComponent5 />
      <section className={styles.imagePexelslizasummerWrapper}>
        <div className={styles.imagePexelslizasummer}>
          <img
            className={styles.imagePexelslizasummerChild}
            alt=""
            src="/rectangle-18.svg"
          />
          <h1 className={styles.getStartedNow} onClick={onGetStartedNowClick}>
            Get Started Now!
          </h1>
        </div>
      </section>
      <section className={styles.imageBelleco}>
        <img
          className={styles.pexelsLizaSummer63479011Icon}
          loading="lazy"
          alt=""
          src="/pexelslizasummer6347901-1@2x.png"
        />
        <div className={styles.imageBellecoChild} data-scroll-to="rectangle2" />
        <div className={styles.imageBellecoInner}>
          <div className={styles.forStudentsRecentGraduateParent}>
            <h1
              className={styles.forStudents}
            >{`For Students & Recent Graduates`}</h1>
            <div className={styles.weProvideTheContainer}>
              <p className={styles.weProvideThe}>
                We provide the necessary tools for ease of understanding
              </p>
              <ul className={styles.offerLettersFinancialAidIn}>
                <li className={styles.offerLetters}>Offer Letters</li>
                <li className={styles.financialAidInformation}>
                  Financial Aid Information
                </li>
                <li className={styles.visaInformation}>Visa Information</li>
                <li className={styles.academicTranscripts}>
                  Academic Transcripts
                </li>
                <li className={styles.courseInformation}>Course Information</li>
                <li className={styles.employmentContracts}>
                  Employment Contracts
                </li>
              </ul>
              <p className={styles.blankLine}>&nbsp;</p>
            </div>
          </div>
        </div>
      </section>
      <img
        className={styles.pexelsBelleCo994831000445Icon}
        loading="lazy"
        alt=""
        src="/pexelsbelleco994831000445-1@2x.png"
      />
      <FrameComponent6 />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} data-scroll-to="rectangle" />
        <h1 className={styles.ourGoal}>Our Goal</h1>
        <div className={styles.ourGoalIsToProvidePeopleWrapper}>
          <div
            className={styles.ourGoalIs}
          >{`Our goal is to provide people from all walks of life with the necessary tools to understand and make sense of any immediate burdens. We are dedicated to sustaining a service that ensures people no longer spend hours and hours on their documents attempting to understand all of the technical language involved. In providing this service we are committing to the goal of maximizing well being through a service that works alongside our customer as another toolkit. `}</div>
        </div>
      </section>
      <section className={styles.principleHomeInner}>
        <div className={styles.interestedInSupportingOurMParent}>
          <h1 className={styles.interestedInSupportingContainer}>
            <p
              className={styles.interestedInSupporting}
            >{`Interested in supporting our mission? `}</p>
            <p className={styles.makeSureTo}>
              Make sure to sign up for updates!
            </p>
          </h1>
          <div className={styles.rectangleWrapper}>
            <textarea className={styles.frameItem} rows={19} cols={55} />
          </div>
        </div>
      </section>
      <footer className={styles.principleHomeChild} />
    </div>
  );
};

export default PrincipleHome;
