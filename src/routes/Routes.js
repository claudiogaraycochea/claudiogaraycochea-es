/* Pages */
//import Error404 from '../pages/error404/Error404';
/* Public */
// import Home from '../pages/home/Home';
import Home from '../pages/home/Home';

import SignIn from '../pages/auth/singIn/SignIn';
import Login from '../pages/auth/login/Login';
import LogOut from '../pages/auth/logOut/LogOut';
import Terms from '../pages/terms/Terms';

/* Private */
// import LinksOverview from '../pages/dashboard/links/overview/Overview';
import CreateLink from '../pages/dashboard/links/createLink/CreateLink';
// import EditLink from '../pages/dashboard/links/editLink/EditLink';

/* Layouts */
import FullLayout from '../layouts/fullLayout/FullLayout';

export const routes = [
  {
    id: 2,
    exact: true,
    path: '/dashboard',
    Component: CreateLink,
    Layout: FullLayout,
    Access: 'Public',
  },
/*  {
    id: 2,
    exact: true,
    path: '/dashboard/',
    Component: LinksOverview,
    Layout: FullLayout,
    Access: 'Public',
  },*/
  {
    id: 2,
    exact: true,
    path: '/sign-in',
    Component: SignIn,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 5,
    exact: true,
    path: '/log-out',
    Component: LogOut,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 5,
    exact: true,
    path: '/login',
    Component: Login,
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
    id: 1,
    exact: true,
    path: '/',
    Component: Home,
    Layout: FullLayout,
    Access: 'Public',
  }
  /*{
    id: 0,
    exact: true,
    path: '*',
    Component: Error404,
    Layout: DashboardLayout,
    Access: 'Public',
  }*/
];