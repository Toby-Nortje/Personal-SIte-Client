import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';


import HomePage from './scenes/homePage';
import { ThemeProvider } from '@mui/system';

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider> */}
        <CssBaseline />
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
