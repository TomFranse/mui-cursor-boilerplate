import type { FC } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

/**
 * Header component for the application.
 * @param props - Component props
 * @returns A React component
 */
const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 