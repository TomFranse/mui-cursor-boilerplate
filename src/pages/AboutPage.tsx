import type { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const AboutPage: FC = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Page
        </Typography>
        <Typography variant="body1" paragraph>
          This is the about page. You can add more information about your application here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutPage; 