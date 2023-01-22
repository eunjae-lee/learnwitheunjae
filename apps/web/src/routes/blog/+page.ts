export type Metadata = {
  title: string;
  createdAt: string;
};

export async function load() {
  const map = import.meta.glob('../../../content/blog/*/index.svx');
  const posts = [];

  for (const fileName of Object.keys(map)) {
    const post = await map[fileName]();
    const pieces = fileName.split('/');
    posts.push({
      slug: pieces[pieces.length - 2],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      metadata: (post as any).metadata as Metadata,
    });
  }

  return {
    posts: posts.sort(
      (a, b) => new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime()
    ),
  };
}
