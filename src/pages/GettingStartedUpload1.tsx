import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import PDFDocViewer from "../components/PDFDocViewer";
import styles from "./GettingStartedUpload1.module.css";

const GettingStartedUpload1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEasyReadTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.gettingStartedupload3}>
      <FrameComponent1 onEasyReadTextClick={onEasyReadTextClick} />
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.documentPreview}>Document Preview</h1>
        <PDFDocViewer />
      </main>
    </div>
  );
};

export default GettingStartedUpload1;
