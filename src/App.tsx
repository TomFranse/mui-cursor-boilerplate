import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

/**
 * Main application component.
 * @returns A React component
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header title="MUI Cursor Boilerplate" />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
