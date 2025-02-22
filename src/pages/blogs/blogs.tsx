import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import DOMPurify from "dompurify";
import { Card } from "components/Card";
import { blogsApi } from "services/modules/blogsApi";
import styles from "./styles.module.css";
import { NavigationLinks } from "../../consts";
import { Blog } from "pages/blog";

const cardStyles = {
  root: {
    width: "100%",
    maxWidth: 800,
  },
  media: {
    objectFit: "cover",
    height: 400,
    "@media (max-width: 600px)": {
      height: 200,
    },
  },
  subtitle: {
    mb: 1,
    color: "text.secondary",
  },
  description: {
    color: "text.primary",
  },
};

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const results = await blogsApi.getBlogs();
      const blogs = await results.json();

      const mappedBlogs = blogs.map((blog: any) => {
        const {
          title: { rendered: title },
          date,
          excerpt: { rendered: description },
          jetpack_featured_media_url: image,
          slug,
          id,
        } = blog;

        const author = "Daniel K Nguyen";
        const dateString = new Date(date).toLocaleString();

        return {
          title,
          subtitle: `${author} - ${dateString}`,
          alt: title,
          description: (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            />
          ),
          image,
          link: `${NavigationLinks.Blog}/${slug}/${id}`,
          id,
        };
      });

      setBlogs(mappedBlogs);
    })();
  }, []);

  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Blogs
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {blogs.map((blog) => {
          return (
            <Card
              key={blog.id}
              cardStyles={cardStyles}
              {...blog}
              enableTargetBlank={false}
            ></Card>
          );
        })}
      </Box>
    </Box>
  );
};
