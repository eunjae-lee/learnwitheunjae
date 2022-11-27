import LogRocket from "logrocket";

export async function subscribeToEmailList({
  slug,
  email,
}: {
  slug: string;
  email: string;
}) {
  if (!["pd", "sinabro-js"].includes(slug)) {
    throw new Error(`Unknown slug for email list (${slug})`);
  }

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
      return { success: true };
    } else if (response.status === 409 && response.statusText === "Conflict") {
      return { success: false, error: "already_subscribed" };
    } else {
      LogRocket.captureMessage("subscription result is not 200", {
        extra: {
          status: response.status,
          statustext: response.statusText,
        },
      });
      return { success: false };
    }
  } catch (err) {
    LogRocket.captureException(err as Error);
    return { success: false };
  }
}
