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
      return true;
    } else {
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
