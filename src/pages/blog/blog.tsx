import { useEffect, useState, ReactNode } from "react";
import { Box, Breadcrumbs, Typography, Link } from "@mui/material";
import { Card } from "components/Card";
import DOMPurify from "dompurify";
import { blogsApi } from "services/modules/blogsApi";
import styles from "./styles.module.css";

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

export type Blog = {
  title: string;
  subtitle: string;
  alt: string;
  description: ReactNode;
  image: string;
};

export const Blog = () => {
  const [blog, setBlog] = useState<Blog>({} as Blog);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get("id") || "";

    (async () => {
      const results = await blogsApi.getBlog(blogId);
      const blog = await results.json();

      const {
        title: { rendered: title },
        content: { rendered: content },
        date,
        jetpack_featured_media_url,
      } = blog[0];

      const author = "Daniel K Nguyen";
      const dateString = new Date(date).toLocaleString();

      const updatedBlog = {
        title,
        subtitle: `${author} - ${dateString}`,
        alt: title,
        description: (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content),
            }}
          />
        ),
        image: jetpack_featured_media_url,
      };

      setBlog(updatedBlog);
    })();
  }, []);

  return (
    <>
      <Box className={styles.breadcrumbs}>
        <Breadcrumbs aria-label="breadcrumb" color="#FFFFFF">
          <Link
            underline="hover"
            color="inherit"
            href="/blogs"
            className={styles.link}
          >
            Blogs
          </Link>
          <Typography color="#FFFFFF">{blog.title}</Typography>
        </Breadcrumbs>
      </Box>
      <Box className={styles.container}>
        <Card {...blog} cardStyles={cardStyles} />
      </Box>
    </>
  );
};
