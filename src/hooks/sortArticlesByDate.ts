import { iArticle } from "../interfaces";

export default function sortArticlesByDate(firstEl: iArticle, secondEl: iArticle): number {
  const firstElDate: number = new Date(firstEl.frontmatter.date).getTime();
  const secondElDate: number = new Date(secondEl.frontmatter.date).getTime();

  return firstElDate - secondElDate;
}
