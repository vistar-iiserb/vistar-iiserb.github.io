
import { createClient, QueryOptions, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import { token } from "./token";
// Removed draftMode import for static export compatibility
import { PostQuery } from './queries'
import { cache } from 'react';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Simplified for static export - always return false for draft mode
const isDraftMode = cache(async () => {
  // Always return false for static export compatibility
  return false;
});




export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const draftModeEnabled = await isDraftMode();

  // Simplified for static export - no token required since draft mode is always false
  const queryOptions: QueryOptions = {};
  
  // For static export, we don't use Next.js caching features
  return client.fetch(query, params, queryOptions);
}

export const BlogFetch = async() => {
  try {
    const data = await sanityFetch({query: PostQuery})
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}