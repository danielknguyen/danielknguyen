import { api } from "services/api";

export class PagesApi {
  async getProjects(): Promise<Response> {
    return api
      .get("/pages?parent=14&_embed=true") // Parent ID for projects
      .then((results) => {
        return results;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  async getPage(slug: string): Promise<Response> {
    return api
      .get(`/pages?slug=${slug}`)
      .then((results) => {
        return results;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}

export const pagesApi = new PagesApi();
