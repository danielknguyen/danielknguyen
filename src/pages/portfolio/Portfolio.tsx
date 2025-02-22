import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { pagesApi } from "services/modules/pagesApi";
import { Box, Typography } from "@mui/material";
import { Card } from "components/Card";
import { NavigationLinks } from "../../consts";
import { ProjectType } from "pages/project/Project";
import styles from "./styles.module.css";

export const Portfolio = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    (async () => {
      const results = await pagesApi.getProjects();
      const projects = await results.json();

      const mappedProjects = projects.map((project: any) => {
        const {
          title: { rendered: title },
          excerpt: { rendered: description },
          _embedded: {
            "wp:featuredmedia": [{ source_url: image, alt_text: alt }],
          },
          slug,
          id,
        } = project;

        return {
          title,
          description: (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            />
          ),
          alt,
          image,
          slug,
          id,
          link: `${NavigationLinks.Project}/${slug}/${id}`,
        };
      });
      setProjects(mappedProjects);
    })();
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.inner}>
        <Typography variant="h2" className={styles.title}>
          Projects
        </Typography>
        <Box className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} {...project} enableTargetBlank={false} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
