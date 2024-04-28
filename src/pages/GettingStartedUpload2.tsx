import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigate } from "react-router-dom";
import styles from "./GettingStartedUpload2.module.css";

const GettingStartedUpload2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleSectionClick = useCallback(() => {
    navigate("/getting-startedupload-2");
  }, [navigate]);

  return (
    <div className={styles.gettingStartedupload}>
      <FrameComponent2 />
      <main className={styles.rectangleParent}>
        <section
          className={styles.frameChild}
          onClick={onRectangleSectionClick}
        />
        <h1 className={styles.inDepthGettingStarted}>
          In-Depth Getting Started
        </h1>
        <div className={styles.frameWrapper}>
          <Button
            className={styles.frameItem}
            disableElevation={true}
            variant="contained"
            sx={{
              background: "#fff2c4",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff2c4" },
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default GettingStartedUpload2;
