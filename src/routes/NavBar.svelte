<script lang="ts">
  import { page } from "$app/stores";
  import { Menu as MenuIcon } from "lucide-svelte";
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  } from "@rgossiaux/svelte-headlessui";

  const majorItems = [{ label: "퐁당개발", href: "/pd" }];

  const minorItems = [
    { label: "블로그", href: "/blog" },
    { label: "발표", href: "/speak" },
    { label: "소개", href: "/intro" },
    { label: "연락하기", href: "/contact" },
  ];

  function isCurrentPage(href: string) {
    return $page.url.pathname === href;
  }

  function getClassForMenuItem(href: string) {
    return isCurrentPage(href)
      ? "underline underline-offset-4 decoration-2 decoration-wavy"
      : "";
  }
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
  <div class="navbar-end gap-2">
    {#each majorItems as item}
      <a
        href={item.href}
        class={"text-lg btn btn-ghost normal-case " +
          getClassForMenuItem(item.href)}>{item.label}</a
      >
    {/each}

    <Menu class="md:hidden dropdown dropdown-end">
      <MenuButton class="btn btn-ghost normal-case"
        ><MenuIcon /><span class="sr-only">메뉴</span></MenuButton
      >
      <MenuItems
        static
        as="ul"
        class="text-base-content bg-base-100 dropdown-content menu p-2 shadow rounded-box w-48"
      >
        {#each minorItems as item}
          <MenuItem as="li">
            <a href={item.href} class={getClassForMenuItem(item.href)}>
              {item.label}
            </a>
          </MenuItem>
        {/each}
      </MenuItems>
    </Menu>
    <ul class="hidden md:flex gap-2">
      {#each minorItems as item}
        <a
          href={item.href}
          class={"btn btn-ghost normal-case " + getClassForMenuItem(item.href)}
          >{item.label}</a
        >
      {/each}
    </ul>
  </div>
</div>
