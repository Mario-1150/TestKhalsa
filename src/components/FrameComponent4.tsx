import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onForStudentsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onForProfessionalsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurImpactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onUnionClick = useCallback(() => {
    navigate("/2-about-us");
  }, [navigate]);

  return (
    <section className={styles.frameParent}>
      <header className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.easyreadParent}>
                  <h1 className={styles.easyread}>EasyRead</h1>
                  <div className={styles.aSimplifiedTool}>
                    A Simplified Tool for Everyday Life...
                  </div>
                </div>
              </div>
              <div
                className={styles.forStudents}
                onClick={onForStudentsTextClick}
              >
                For Students
              </div>
            </div>
          </div>
          <div className={styles.forProfessionalsWrapper}>
            <div
              className={styles.forProfessionals}
              onClick={onForProfessionalsTextClick}
            >
              For Professionals
            </div>
          </div>
          <div className={styles.ourImpactWrapper}>
            <div
              className={styles.ourImpact}
              onClick={onOurImpactTextClick}
            >{`Our Impact `}</div>
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
          <div className={styles.frameParent1}>
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
      <div className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.frameWrapper2}>
          <div className={styles.ourObjectiveParent}>
            <h1 className={styles.ourObjective}>Our Objective</h1>
            <h1 className={styles.ourObjective1}>Our Objective</h1>
          </div>
        </div>
        <div
          className={styles.weStriveTo}
        >{`We strive to make a service that eases your life, simple as that! By developing our tool we can cut down the time it takes to read your documents and provide a streamline approach to making sense of the complex nature of some forms and documents. `}</div>
      </div>
    </section>
  );
};

export default FrameComponent4;
