import * as Loadable from 'react-loadable';

import BuildIcon from '@material-ui/icons/Build';
import FaceIcon from '@material-ui/icons/Face';
import FolderIcon from '@material-ui/icons/FolderSpecial';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';

import Loading from './modules/App/components/Loading';

export const routeConfig = [{
  name: 'Home',
  path: '/',
  icon: HomeIcon,
  exact: true,
  ancestors: [],
  loader: () => import('./views/Home'),
}, {
  name: 'About',
  path: '/about',
  icon: FaceIcon,
  ancestors: [],
  loader: () => import('./views/About'),
}, {
  name: 'Services',
  path: '/services',
  icon: BuildIcon,
  ancestors: [],
  loader: () => import('./views/Services'),
}, {
  name: 'Work',
  path: '/work',
  icon: FolderIcon,
  ancestors: [],
  loader: () => import('./views/Work'),
}, {
  name: 'Lab',
  path: '/lab',
  icon: SchoolIcon,
  ancestors: [],
  loader: () => import('./views/Lab'),
}, {
  name: 'NotFound',
  path: '*',
  loader: () => import('./views/NotFound'),
}];

const getRoute = ({ path, name, loader, ...props }: any) => ({
  path,
  name,
  component: Loadable({
    loader,
    loading: Loading,
    delay: 300,
  }),
  ...props,
});

export default function createRoutes() {
  return routeConfig.map((route) => getRoute(route));
}
