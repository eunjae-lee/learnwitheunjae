<script>
  import "../app.css";
  import LogRocket from "logrocket";
  import { dev } from "$app/environment";

  if (!dev) {
    LogRocket.init("22xiec/learn-with-eunjae");
  }
</script>

<slot />

<style>
  ::-moz-selection {
    /* Code for Firefox */
    color: #fbf4ef;
    background: #202d85;
  }

  ::selection {
    color: #fbf4ef;
    background: #202d85;
  }
</style>
