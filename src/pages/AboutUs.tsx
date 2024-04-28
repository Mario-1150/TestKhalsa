import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <FrameComponent3 />
      <section className={styles.aboutUsMoreParent}>
        <h1 className={styles.aboutUs1}>{`About Us & More`}</h1>
        <div className={styles.infoToFill}>Info to fill should time permit</div>
      </section>
    </div>
  );
};

export default AboutUs;
