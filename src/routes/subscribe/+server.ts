import { env } from "$env/dynamic/private";
import { error, json, type RequestEvent } from "@sveltejs/kit";
import fetch from "node-fetch";

const MAP: Record<string, string> = {
  pd: "48dc31f8-62a0-11ed-88a2-5db2fdcb6c84",
  "upgrade-js": "4d5c249a-62a0-11ed-881a-cd7277d2b9d7",
};

export async function POST({ request }: RequestEvent) {
  const { slug, email } = await request.json();

  if (!MAP[slug]) {
    throw error(404, `Unknown email list id (${slug})`);
  }

  const response = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${MAP[slug]}/contacts`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        api_key: env.EMAIL_OCTOPUS_API_KEY,
        email_address: email,
      }),
    }
  );

  if (response.status === 200) {
    return json({});
  } else {
    throw error(response.status, response.statusText);
  }
}
