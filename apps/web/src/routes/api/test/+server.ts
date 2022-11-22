import { isAuthenticatedRequest } from "@lwe/db";
import { json, type RequestEvent } from "@sveltejs/kit";

export async function GET(params: RequestEvent) {
  const authenticated = isAuthenticatedRequest(params);
  return json({ resut: authenticated });
}
