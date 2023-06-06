import { redirect } from '@sveltejs/kit';

export async function GET() {
  throw redirect(307, 'https://discord.gg/d94Z8V5wB2');
}
