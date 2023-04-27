import { json } from '@sveltejs/kit';

// source: https://github.com/glin/reactable/blob/00517534f76f2142680b2fb6cb2083b3756673eb/vignettes/popular-movies/tmdb_movies.json
import data from './tmdb_movies.json?raw';

export async function GET() {
  return json(JSON.parse(data));
}
