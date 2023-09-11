import { redirect } from '@sveltejs/kit';

export async function GET() {
  throw redirect(307, 'https://sinabrojs.dev/ko');
}
