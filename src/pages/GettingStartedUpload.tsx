import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import WhatDoesThisMeanQuestionma from "../components/WhatDoesThisMeanQuestionma";
import styles from "./GettingStartedUpload.module.css";

const GettingStartedUpload: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnionClick = useCallback(() => {
    navigate("/2-about-us");
  }, [navigate]);

  return (
    <div className={styles.gettingStartedupload2}>
      <FrameComponent1
        onEasyReadTextClick={onEasyReadTextClick}
        onUnionClick={onUnionClick}
      />
      <div className={styles.gettingStartedupload2Child} />
      <div className={styles.gettingStartedupload2Item} />
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.documentPreview}>Document Preview</h1>
        <section className={styles.whatDoesThisMeanQuestionmaWrapper}>
          <WhatDoesThisMeanQuestionma />
        </section>
      </main>
    </div>
  );
};

export default GettingStartedUpload;
