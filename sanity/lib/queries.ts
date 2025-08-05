import { defineQuery } from "next-sanity";

export const PostQuery = defineQuery(
    `*[_type == "post"]{
        title,
         "slug": slug.current,
        abstract,
        mainImage,
        categories[]->{
          title
        },
        publishedAt,
        }
        `);

export const PostQueryBySlug = defineQuery(
    `*[_type == "post" && slug.current == $slug]{
        title,
         "slug": slug.current,
        abstract,
        mainImage,
        categories[]->{
          title
        },
        publishedAt,
        body
        }
        `);