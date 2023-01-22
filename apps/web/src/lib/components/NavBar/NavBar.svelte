<script lang="ts">
  import { page } from '$app/stores';
  import {
    Menu as MenuIcon,
    Github,
    Palette,
    Dices,
    MessageCircle,
    PersonStanding,
    Flame,
    Compass,
    FileText,
  } from 'lucide-svelte';
  import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
  import NavBarItem from './NavBarItem.svelte';
  import NavBarMenuItem from './NavBarMenuItem.svelte';

  $: loggedIn = Boolean($page.data.session);

  $: isHome = $page.url.pathname === '/';
  $: isPrimary = !isHome && $page.url.pathname.startsWith('/in');
  $: isSecondary = !isHome && !isPrimary;

  $: centerMenuItems =
    loggedIn && $page.url.pathname.startsWith('/in')
      ? [
          {
            label: '수강 중인 강좌',
            href: '/in/my',
            icon: Flame,
          },
          {
            label: '강좌 둘러보기',
            href: '/in/explore',
            icon: Compass,
          },
        ]
      : [
          {
            label: '시나브로 자바스크립트',
            shortLabel: '시나브로 JS',
            href: '/sinabro-js',
            icon: Palette,
          },
          // { label: "퐁당개발", href: "/pd", icon: Dices },
          // { label: "블로그", href: "/blog" },
          // { label: "발표", href: "/speak" },
          { label: '커뮤니티', href: '/community', icon: MessageCircle },
          { label: '블로그', href: '/blog', icon: FileText },
          { label: '소개', href: '/about', icon: PersonStanding },
        ];

  $: rightMenuItems = [
    {
      label: loggedIn ? $page.data.session.user.user_metadata.preferred_username : '로그인',
      icon: Github,
      href: loggedIn ? '/in#' : '/sign_in',
    },
  ];
</script>

<div
  class:bg-primary={isPrimary}
  class:bg-secondary={isSecondary}
  class:py-4={isPrimary || isSecondary}
>
  <div class="max-w-4xl mx-auto" class:text-base-100={isPrimary || isSecondary}>
    <div class="navbar sm:px-0">
      <div class="navbar-start">
        {#if isPrimary || isSecondary}
          <a
            href="/"
            class="sm:-ml-3 btn btn-ghost font-light normal-case hover:no-underline flex flex-col items-start gap-[0.125rem]"
          >
            <p class="text-xs leading-none">Learn with</p>
            <p class="text-lg leading-none">Eunjae</p></a
          >
        {/if}
      </div>
      <div class="navbar-center gap-2 hidden sm:flex">
        {#each centerMenuItems as item}
          <NavBarItem {item} useWhiteUnderline={isPrimary || isSecondary} />
        {/each}
      </div>
      <div class="navbar-end">
        <div class="hidden sm:flex">
          {#each rightMenuItems as item}
            <NavBarItem {item} useWhiteUnderline={isPrimary || isSecondary} />
          {/each}
        </div>
        <Menu class="sm:hidden dropdown dropdown-end">
          <MenuButton as="label" tabindex={0} class="btn btn-ghost normal-case"
            ><MenuIcon /><span class="sr-only">메뉴</span></MenuButton
          >
          <MenuItems
            static
            as="ul"
            class="text-base-content bg-base-100 dropdown-content menu p-2 shadow rounded-box w-48"
          >
            {#each [...centerMenuItems, ...rightMenuItems] as item}
              <MenuItem as="li" let:active>
                <NavBarMenuItem {item} {isSecondary} {active} />
              </MenuItem>
            {/each}
          </MenuItems>
        </Menu>
      </div>
    </div>
  </div>
</div>
