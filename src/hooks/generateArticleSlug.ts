// Takes data from the article to generate the URL slug
export default function generateArticleSlug(origSlug: string): string {
  const [, year, month, day, slug] = origSlug.match(/^(\d{4})-(\d{2})-(\d{2})-([\w-]+)/i);

  return `${year}${month}${day}-${slug}`;
}
