import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';

const getLink = (item: any) => {
  const parts: string[] = [];
  if (item.ancestors) {
    item.ancestors.forEach((a: any) => {
      parts.push(`/${a}`);
    });
  }
  if (item.name !== 'Home') {
    parts.push(item.path);
  }
  return parts.join('');
}

export interface INavigationItem {
  name: string;
  path: string;
  icon?: any;
  ancestors?: string[];
}

interface INavigationItemProps {
  classes: any;
  item: INavigationItem;
  onClick?(): void;
}

const NavigationItem = ({ classes, intl, item, onClick }: INavigationItemProps & InjectedIntlProps) => {
  return (
    <li key={item.name} className={classes.item} onClick={onClick}>
      <Link className={classes.link} to={getLink(item)}>
        {item.icon && <item.icon className={classes.icon} />}
        <span className={classes.text}>{intl.formatMessage({ id: `menu.${item.name}` })}</span>
      </Link>
    </li>
  );
}

export default injectIntl(NavigationItem);