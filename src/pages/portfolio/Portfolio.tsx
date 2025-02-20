import { Box, Typography } from "@mui/material";
import { Card } from "components/Card";
import styles from "./styles.module.css";
import { PortfolioData } from "pages/portfolio/logic";

export const Portfolio = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.inner}>
        <Typography variant="h2" className={styles.title}>
          Portfolio
        </Typography>
        <Box className={styles.grid}>
          {PortfolioData.map((card, index) => (
            <Card {...card} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
