import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';

const getLink = (item: any) => {
  const parts: string[] = [];
  item.ancestors.forEach((a: any) => {
    parts.push(a);
  });
  if (item.id !== 'home') {
    parts.push(item.id);
  }
  return parts.join('/');
}

export interface INavigationItem {
  id: string;
  icon: any;
  ancestors?: string[];
}

interface INavigationItemProps {
  classes: any;
  item: INavigationItem;
  onClick?(): void;
}

const NavigationItem = ({ classes, intl, item, onClick }: INavigationItemProps & InjectedIntlProps) => {
  return (
    <li key={item.id} className={classes.item} onClick={onClick}>
      <Link className={classes.link} to={getLink(item)}>
        {item.icon && <item.icon className={classes.icon} />}
        <span className={classes.text}>{intl.formatMessage({ id: `menu.${item.id}` })}</span>
      </Link>
    </li>
  );
}

export default injectIntl(NavigationItem);