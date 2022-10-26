<script lang="ts">
  import { Menu as MenuIcon } from "lucide-svelte";
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  } from "@rgossiaux/svelte-headlessui";
</script>

<div class="navbar bg-primary text-primary-content">
  <div class="navbar-start">
    <a
      href="/"
      class="btn btn-ghost normal-case text-xl inline-block leading-none py-1"
      ><p class="text-xs">Learn with</p>
      <p class="font-extrabold">Eunjae</p></a
    >
  </div>
  <div class="navbar-end">
    <a href="/pd" class="btn btn-ghost normal-case">퐁당개발</a>
    <Menu class="dropdown dropdown-end">
      <MenuButton>More</MenuButton>
      <MenuItems
        as="ul"
        class="dropdown-content menu p-2 shadow rounded-box w-36"
      >
        <MenuItem as="li" let:active>
          <a href="/account-settings" class:active>Account settings</a>
        </MenuItem>
        <MenuItem as="li" let:active>
          <a href="/documentation" class:active>Documentation</a>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</div>
