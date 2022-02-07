import { basename, extname } from "path";

export function getSlugFromFile(path: string): string {
  return basename(path, extname(path));
}

export function getBaseSiteURL(): string {
  return import.meta.env.PROD
    ? "https://www.carlosbronze.com.br/"
    : "http://localhost:3000/";
}
