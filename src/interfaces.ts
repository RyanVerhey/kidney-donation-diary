export interface iArticle {
  id: string;
  slug: string;
  frontmatter: { date: string; title: string; author: string | null; };
  body?: string;
  excerpt?: string;
}
