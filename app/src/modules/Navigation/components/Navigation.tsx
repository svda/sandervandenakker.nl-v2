import * as React from 'react';

import { INavigationItem } from './NavigationItem';
import { NavigationItem } from './';

interface INavigationProps {
  classes: any;
  items: INavigationItem[];
  onItemClick: any;
}

const Navigation = ({ classes, items, onItemClick }: INavigationProps) => {
  return (
    <div className={classes.menu}>
      <ul className={classes.list} role="navigation">
        {items.map((item: any) => <NavigationItem key={item.name} item={item} classes={classes} onClick={onItemClick} />)}
      </ul>
    </div>
  );
}

export default Navigation;
