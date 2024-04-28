import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propWidth,
  propMinWidth,
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propMinWidth, propAlignSelf]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-27.svg" />
        <div
          className={styles.embeddingPdfdocViewer}
        >{`Embedding PDF/Doc viewer `}</div>
      </div>
      <img
        className={styles.questionMark481Icon}
        loading="lazy"
        alt=""
        src="/questionmark48-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
