import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.gettingStartedParent}>
        <h1 className={styles.gettingStarted}>{`Getting Started `}</h1>
        <div
          className={styles.simplyUploadYour}
        >{`Simply upload your file and just like that you have your file broken down into an intelligible and concise format for your convenience. `}</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/arrow-2.svg"
        />
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/arrow-2.svg"
        />
        <div className={styles.pngtreeFileDownloadIconPngWrapper}>
          <img
            className={styles.pngtreeFileDownloadIconPng}
            loading="lazy"
            alt=""
            src="/pngtreefiledownloadiconpngimage-4647924-1@2x.png"
          />
        </div>
        <div className={styles.imageShvetsa}>
          <div className={styles.imageShvetsaChild} />
          <div className={styles.imageShvetsaItem} />
          <div className={styles.imageShvetsaInner} />
        </div>
        <div className={styles.e2586bdc1cda16d92fd0632491a710Wrapper}>
          <img
            className={styles.e2586bdc1cda16d92fd0632491a710Icon}
            loading="lazy"
            alt=""
            src="/e2586bdc1cda16d92fd0632491a71092-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
