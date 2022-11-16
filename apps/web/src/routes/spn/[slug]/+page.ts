import type { LoadEvent } from "@sveltejs/kit";

export async function load({ params }: LoadEvent) {
  const post = await import(`../../../../content/spn/${params.slug}/index.svx`);

  return {
    content: post.default,
    metadata: post.metadata,
  };
}
