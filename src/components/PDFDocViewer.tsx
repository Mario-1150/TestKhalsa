import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent from "./FrameComponent";
import styles from "./PDFDocViewer.module.css";

const PDFDocViewer: FunctionComponent = () => {
  return (
    <section className={styles.pDFDocViewer}>
      <div className={styles.informationBox}>
        <div className={styles.embeddedPDF}>
          <FrameComponent
            propWidth="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
        <footer className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <TextField
              className={styles.frameChild}
              placeholder="Type..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="28px" height="28px" src="/search-1.png" />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "50px",
                  backgroundColor: "#fff",
                  paddingLeft: "19px",
                  borderRadius: "90px",
                  fontSize: "20px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "-14px",
                  color: "#000",
                },
              }}
            />
          </div>
          <button className={styles.accountMenuIcon}>
            <div className={styles.accountMenuIconChild} />
            <img
              className={styles.speakerIconLogo600nw759702}
              alt=""
              src="/speakericonlogo600nw759702361-1@2x.png"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default PDFDocViewer;
