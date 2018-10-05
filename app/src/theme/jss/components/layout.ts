import theme from '../..';

const blockLink = {
  display: 'block',
  padding: `${theme.spacing.unit * 2}px`,
  color: theme.typography.body1.color,
  textDecoration: 'none',
  transition: 'all .1s linear',

  '&:hover': {
      backgroundColor: theme.palette.grey[100],
  },
};

const containerFluid = {
  // paddingRight: '15px',
  // paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

const cover = {
  position: 'absolute' as 'absolute', // Fix for type-widening issue.
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 'auto',
  height: 'auto',
};

const masthead = {
  backgroundSize: 'cover',
  minHeight: 500,
  padding: '5rem 0',
};

const paper = {
  // fontSize: theme.typography.fontSize,
  '& h2, & h3': {
    margin: 0,
  },
};

export {
  blockLink,
  container,
  containerFluid,
  cover,
  masthead,
  paper,
};