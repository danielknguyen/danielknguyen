import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./styles.module.css";

const SENTENCE = "Hi my name is Daniel and I'm a Frontend Software Engineer.";

export const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < SENTENCE.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + SENTENCE[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, SENTENCE]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box className={styles.container}>
      <Box>
        <span className={styles.textStyle}>
          {text}
          {showCursor ? "|" : "\u00A0"}
        </span>
      </Box>
    </Box>
  );
};
