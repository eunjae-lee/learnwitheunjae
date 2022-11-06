<script lang="ts">
  import { page } from "$app/stores";
  import { Menu as MenuIcon } from "lucide-svelte";
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  } from "@rgossiaux/svelte-headlessui";

  const menuItems = [
    { label: "퐁당개발", href: "/pd" },
    { label: "블로그", href: "/blog" },
    { label: "발표", href: "/speak" },
    { label: "소개", href: "/intro" },
    { label: "연락하기", href: "/contact" },
  ];

  function isCurrentPage(href: string) {
    // return href === "/pd";
    return $page.url.pathname === href;
  }

  function getClassForMenuItem(href: string) {
    return isCurrentPage(href)
      ? "underline underline-offset-4 decoration-2 decoration-wavy decoration-primary"
      : "";
  }
</script>

<div class="max-w-4xl mx-auto">
  <div class="navbar">
    <div class="navbar-start" />
    <div class="navbar-center gap-2 hidden sm:flex">
      {#each menuItems as item}
        <a
          href={item.href}
          class={"text-sm font-light btn btn-ghost normal-case " +
            getClassForMenuItem(item.href)}>{item.label}</a
        >
      {/each}
    </div>
    <div class="navbar-end">
      <Menu class="sm:hidden dropdown dropdown-end">
        <MenuButton as="label" tabindex={0} class="btn btn-ghost normal-case"
          ><MenuIcon /><span class="sr-only">메뉴</span></MenuButton
        >
        <MenuItems
          static
          as="ul"
          class="text-base-content bg-base-100 dropdown-content menu p-2 shadow rounded-box w-48"
        >
          {#each menuItems as item}
            <MenuItem as="li" let:active>
              <a
                href={item.href}
                class={getClassForMenuItem(item.href)}
                class:active
              >
                {item.label}
              </a>
            </MenuItem>
          {/each}
        </MenuItems>
      </Menu>
    </div>
  </div>
</div>
