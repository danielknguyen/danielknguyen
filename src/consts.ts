export type Page = "Home" | "Portfolio" | "Blogs";

export const pages: Page[] = ["Home", "Portfolio", "Blogs"];

export enum NavigationLinks {
  "Home" = "/",
  "Portfolio" = "/portfolio",
  "Blogs" = "/blogs",
}
