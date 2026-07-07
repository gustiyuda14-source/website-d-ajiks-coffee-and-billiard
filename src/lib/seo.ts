import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Public path to a real venue/product photo — shown in the share preview card. */
  image: string;
  /** Route path, e.g. "/menu" — used for canonical + og:url. */
  path: string;
};

export function pageMetadata({ title, description, image, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [image],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
