export interface iArticle {
  id: string;
  slug: string;
  frontmatter: { date: string; title: string; };
  body?: string;
  excerpt?: string;
}
