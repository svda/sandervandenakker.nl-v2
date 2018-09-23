import * as React from 'react';

import { INavigationItem } from './NavigationItem';
import { NavigationItem } from './';

interface INavigationProps {
  classes: any;
  items: INavigationItem[];
}

const Navigation = ({ classes, items }: INavigationProps) => {
  return (
    <div className={classes.menu}>
      <ul className={classes.list} role="navigation">
        {items.map((item: any) => <NavigationItem key={item.id} item={item} classes={classes} />)}
      </ul>
    </div>
  );
}

export default Navigation;
