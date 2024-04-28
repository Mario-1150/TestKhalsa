import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onForStudentsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onForProfessionalsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUnionClick = useCallback(() => {
    navigate("/2-about-us");
  }, [navigate]);

  return (
    <div className={styles.gettingStarteduploadInner}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.easyreadParent}>
            <h1 className={styles.easyread} onClick={onEasyReadTextClick}>
              EasyRead
            </h1>
            <div className={styles.aSimplifiedTool}>
              A Simplified Tool for Everyday Life...
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <nav className={styles.frameContainer}>
            <nav className={styles.forStudentsParent}>
              <div
                className={styles.forStudents}
                onClick={onForStudentsTextClick}
              >
                For Students
              </div>
              <div
                className={styles.forProfessionals}
                onClick={onForProfessionalsTextClick}
              >
                For Professionals
              </div>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
            </nav>
          </nav>
          <div className={styles.unionWrapper}>
            <img
              className={styles.unionIcon}
              loading="lazy"
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.signIn}>Sign In</div>
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
                height: 43,
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
