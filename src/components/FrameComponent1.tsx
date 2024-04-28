import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  /** Action props */
  onEasyReadTextClick?: () => void;
  onUnionClick?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  onEasyReadTextClick,
  onUnionClick,
}) => {
  return (
    <header className={styles.gettingStartedupload2Inner}>
      <div className={styles.frameParent}>
        <div className={styles.aSimplifiedToolWrapper}>
          <div className={styles.aSimplifiedTool}>
            <h1 className={styles.easyread} onClick={onEasyReadTextClick}>
              EasyRead
            </h1>
            <div className={styles.aSimplifiedTool1}>
              A Simplified Tool for Everyday Life...
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.accountWrapper}>
            <div className={styles.account}>Account</div>
          </div>
          <div className={styles.unionWrapper}>
            <img
              className={styles.unionIcon}
              loading="lazy"
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </div>
          <div className={styles.signInButton}>
            <div className={styles.signUpButton}>
              <div className={styles.signUpButtonChild} />
              <div className={styles.signIn}>Sign In</div>
            </div>
          </div>
          <Button
            className={styles.frameChild}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20",
              background: "#fff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff" },
              width: 167,
              height: 43,
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
