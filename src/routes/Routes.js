import Home from '../pages/home/Home';
import HomeCat from '../pages/homeCat/HomeCat';
import Terms from '../pages/terms/Terms';
import Privacy from '../pages/privacy/Privacy';
import Cookies from '../pages/cookies/Cookies';

/* Layouts */
import FullLayout from '../layouts/fullLayout/FullLayout';

export const routes = [
  {
    id: 4,
    exact: true,
    path: '/privacy',
    Component: Privacy,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 4,
    exact: true,
    path: '/terms',
    Component: Terms,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 3,
    exact: true,
    path: '/cookies',
    Component: Cookies,
    Layout: FullLayout,
    Access: 'Public',
  },
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