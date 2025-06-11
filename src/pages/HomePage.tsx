import type { FC } from 'react';
import { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';

const HomePage: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your MUI Application
        </Typography>
        <Typography variant="body1" paragraph>
          This is a boilerplate for React applications using TypeScript, Vite, and Material UI.
          It follows the Google TypeScript Style Guide and includes ESLint and Prettier for code quality.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Count is: {count}
        </Button>
      </Paper>
    </Box>
  );
};

export default HomePage; 