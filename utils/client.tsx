import { createClient, Entry, EntryCollection } from "contentful"
import { EntrySkeletonType } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  environment: 'master',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string
});
export async function BlogFetch() {

  try {
    const entries: EntryCollection<EntrySkeletonType> = await client.getEntries();
    return entries.items;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export const BlogFetchById = async (id: string) => {
  const entry = await client.getEntry(id);
  return entry;
};

