import { api } from "services/api";

export class BlogsApi {
  async getBlogs(): Promise<Response> {
    return api
      .get("/posts")
      .then((results) => {
        return results;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}

export const blogsApi = new BlogsApi();
