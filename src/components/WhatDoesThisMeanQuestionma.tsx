import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import { useNavigate } from "react-router-dom";
import styles from "./WhatDoesThisMeanQuestionma.module.css";

const WhatDoesThisMeanQuestionma: FunctionComponent = () => {
  const navigate = useNavigate();

  const onWhatDoesThisClick = useCallback(() => {
    navigate("/getting-startedupload-3");
  }, [navigate]);

  const onWhatDoIClick = useCallback(() => {
    navigate("/getting-startedupload-3");
  }, [navigate]);

  const onCanYouProvideClick = useCallback(() => {
    navigate("/getting-startedupload-3");
  }, [navigate]);

  return (
    <div className={styles.whatDoesThisMeanQuestionma}>
      <FrameComponent />
      <div className={styles.whatDoesThisMeanContainerParent}>
        <div className={styles.whatDoesThisMeanContainer}>
          <div className={styles.whatDoesThisMeanContainerChild} />
          <div className={styles.whatDoesThis} onClick={onWhatDoesThisClick}>
            What does this mean?
          </div>
        </div>
        <div className={styles.whatDoesThisMeanContainer1}>
          <div className={styles.whatDoesThisMeanContainerItem} />
          <div className={styles.whatDoI} onClick={onWhatDoIClick}>
            What do I do?
          </div>
        </div>
        <div className={styles.whatDoesThisMeanContainer2}>
          <div className={styles.whatDoesThisMeanContainerInner} />
          <div className={styles.canYouProvide} onClick={onCanYouProvideClick}>
            Can you provide references?
          </div>
        </div>
        <Button
          className={styles.whatDoesThisMeanContainer3}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "20",
            background: "#fff",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#fff" },
            height: 77,
          }}
        >
          Other Questions
        </Button>
      </div>
    </div>
  );
};

export default WhatDoesThisMeanQuestionma;
