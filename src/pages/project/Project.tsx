import { ReactNode, useEffect, useState } from "react";
import { Container, Typography, Box, Breadcrumbs, Link } from "@mui/material";
import { pagesApi } from "services/modules/pagesApi";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import styles from "./styles.module.scss";

export type ProjectType = {
  title: string;
  description: ReactNode;
  alt: string;
  image: string;
  slug: string;
  id?: string;
  link?: string;
  content?: ReactNode;
};

export const Project = () => {
  const [project, setProject] = useState<Partial<ProjectType>>({});
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      const results = await pagesApi.getPage(slug || "");
      const project = await results.json();

      const {
        title: { rendered: title },
        content: { rendered: content },
      } = project[0];

      const data = {
        title,
        content: (
          <div
            className={styles.section}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content),
            }}
          />
        ),
      };

      setProject(data);
    })();
  }, []);

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        color="#FFFFFF"
        className={styles.breadcrumbs}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/projects"
          className={styles.link}
        >
          Projects
        </Link>
        <Typography color="#FFFFFF">{project.title}</Typography>
      </Breadcrumbs>
      <Container maxWidth="lg" className={styles.container}>
        <Box>
          <Typography variant="h2" className={styles.title}>
            {project.title}
          </Typography>
          {project.content}
        </Box>
      </Container>
    </>
  );
};
