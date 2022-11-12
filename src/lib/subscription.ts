import LogRocket from "logrocket";

export type SubscriptionSlug = "pd" | "upgrade-js";

export async function subscribeToEmailList({
  slug,
  email,
}: {
  slug: SubscriptionSlug;
  email: string;
}) {
  try {
    const response = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        slug,
        email,
      }),
    });

    if (response.status === 200) {
      return true;
    } else {
      console.log("💡 subscription error!", {
        status: response.status,
        statustext: response.statusText,
      });
      LogRocket.captureMessage("subscription result is not 200", {
        extra: {
          status: response.status,
          statustext: response.statusText,
        },
      });
      return false;
    }
  } catch (err) {
    LogRocket.captureException(err);
    return false;
  }
}
