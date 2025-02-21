import { api } from "services/api";

export class BlogsApi {
  async getBlogs() {
    api
      .get("/posts")
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const blogsApi = new BlogsApi();
