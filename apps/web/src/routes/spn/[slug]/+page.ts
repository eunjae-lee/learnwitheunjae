import type { LoadEvent } from "@sveltejs/kit";

export async function load({ params }: LoadEvent) {
  const post = await import(`../../../../content/spn/${params.slug}.svx`);

  return {
    content: post.default,
    metadata: post.metadata,
  };
}
