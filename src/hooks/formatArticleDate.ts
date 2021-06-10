/*

This is needed because the date strings in the frontmatter come back with a time
of midnight UTC. To make sure the date is correct, I make sure the date is
formatted to the UTC time zone.

*/

export default function formatArticleDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: "UTC" })
}
