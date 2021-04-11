import Home from '../pages/home/Home';
import HomeCat from '../pages/homeCat/HomeCat';

/* Layouts */
import FullLayout from '../layouts/fullLayout/FullLayout';

export const routes = [
  {
    id: 2,
    exact: true,
    path: '/cat',
    Component: HomeCat,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 1,
    exact: true,
    path: '/',
    Component: Home,
    Layout: FullLayout,
    Access: 'Public',
  }
];