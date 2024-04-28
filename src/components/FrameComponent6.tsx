import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} data-scroll-to="rectangle1" />
      <div className={styles.frameWrapper}>
        <div className={styles.forProfessionalsParent}>
          <h1 className={styles.forProfessionals}>For Professionals</h1>
          <div className={styles.likewiseForPersonalContainer}>
            <p className={styles.likewiseForPersonal}>
              Likewise for personal and professional use:
            </p>
            <ul className={styles.healthcareBenefitsPackagesT}>
              <li className={styles.healthcareBenefitsPackages}>
                Healthcare benefits packages
              </li>
              <li className={styles.taxSummaries}>Tax summaries</li>
              <li
                className={styles.loanCredit}
              >{`Loan & credit card details`}</li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
        </div>
      </div>
      <div className={styles.pexelsShvetsa37274571Parent}>
        <img
          className={styles.pexelsShvetsa37274571Icon}
          alt=""
          src="/pexelsshvetsa3727457-1@2x.png"
        />
        <img
          className={styles.pexelsShvetsa37274572Icon}
          loading="lazy"
          alt=""
          src="/pexelsshvetsa3727457-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent6;
