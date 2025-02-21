export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const DEFAULT_BASE_URL =
  "https://public-api.wordpress.com/wp/v2/sites/danielknguyen.wordpress.com";

export class Api {
  baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || DEFAULT_BASE_URL;
  }

  async request(endpoint: string, method: HTTPMethod, body?: any) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  get(endpoint: string) {
    return this.request(endpoint, HTTPMethod.GET);
  }

  post(endpoint: string, body: any) {
    return this.request(endpoint, HTTPMethod.POST, body);
  }

  put(endpoint: string, body: any) {
    return this.request(endpoint, HTTPMethod.PUT, body);
  }

  delete(endpoint: string) {
    return this.request(endpoint, HTTPMethod.DELETE);
  }
}

export const api = new Api();
