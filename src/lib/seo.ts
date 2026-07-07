import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/menu" — used for canonical + og:url. */
  path: string;
};

/**
 * Every page points at the same generated brand card (app/opengraph-image.tsx)
 * — one elegant logo+tagline card, only the surrounding title/description text
 * changes per page (same pattern as the Epic Moment reference site).
 *
 * This has to be explicit: Next.js only auto-attaches the opengraph-image file
 * convention to a route when that route's own `metadata` doesn't define its
 * own `openGraph` object at all. Since every page here sets openGraph (for
 * title/description/url), that replaces the parent's openGraph wholesale
 * instead of merging — so without `images` here, child routes silently lose
 * the picture entirely (confirmed: worked on "/", missing on every sub-page).
 */
const OG_IMAGE = "/opengraph-image";

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [OG_IMAGE],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
