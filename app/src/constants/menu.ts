import BuildIcon from '@material-ui/icons/Build';
import FaceIcon from '@material-ui/icons/Face';
import FolderIcon from '@material-ui/icons/FolderSpecial';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';

const menuItems = [{
  id: 'home',
  icon: HomeIcon,
  ancestors: [],
}, {
  id: 'about',
  icon: FaceIcon,
  ancestors: [],
}, {
  id: 'services',
  icon: BuildIcon,
  ancestors: [],
}, {
  id: 'work',
  icon: FolderIcon,
  ancestors: [],
}, {
  id: 'lab',
  icon: SchoolIcon,
  ancestors: [],
}];

export default menuItems;
