import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={styles.fRAMEAParent}>
      <div className={styles.fRAMEA}>
        <div className={styles.fRAMEB}>
          <div className={styles.fRAMEBInner}>
            <div className={styles.easyreadParent}>
              <h1 className={styles.easyread} onClick={onEasyReadTextClick}>
                EasyRead
              </h1>
              <div className={styles.aSimplifiedTool}>
                A Simplified Tool for Everyday Life...
              </div>
            </div>
          </div>
          <div className={styles.forStudents}>For Students</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.forProfessionalsParent}>
          <div className={styles.forProfessionals}>For Professionals</div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
        </div>
      </div>
      <div className={styles.unionWrapper}>
        <img
          className={styles.unionIcon}
          loading="lazy"
          alt=""
          src="/union.svg"
        />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.signIn}>Sign In</div>
        </div>
      </div>
      <Button
        className={styles.frameItem}
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
    </header>
  );
};

export default FrameComponent3;
