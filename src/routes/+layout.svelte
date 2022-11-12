<script>
  import "../app.css";
  import LogRocket from "logrocket";
  import { dev } from "$app/environment";

  if (!dev) {
    LogRocket.init("22xiec/learn-with-eunjae");
  }
</script>

<slot />
