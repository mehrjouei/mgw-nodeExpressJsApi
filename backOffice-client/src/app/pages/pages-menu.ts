import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Posts',
    icon: 'nb-compose',
    children: [
      {
        title: 'List',
        link: '/pages/posts/list',
      }
    ],
  },

];
