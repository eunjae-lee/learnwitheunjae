// in order to get the auth helper started on the server-side
import "@lwe/db";
import { Blob } from "node:buffer";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/api/sinabro-js/ecommerce") {
    // https://vercel.com/guides/how-to-enable-cors
    if (event.request.method === "OPTIONS") {
      // @ts-expect-error ignore this
      return new Response(new Blob(), { status: 200 });
    }

    const response = await resolve(event);
    response.headers.set("Access-Control-Allow-Credentials", true);
    response.headers.set("Access-Control-Allow-Origin", "*");
    // another common pattern
    // response.headers.set('Access-Control-Allow-Origin', req.headers.origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    return response;
  }

  return await resolve(event);
};
