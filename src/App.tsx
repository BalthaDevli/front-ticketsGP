import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useThemeContext } from './theme/ThemeContext';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login, MyTasks, Boards, BoardDetail } from './views/index'
import Navbar from './components/Navbar/Navbar';

const ProtectedRoute = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const status = 'authenticated';

  useEffect(() => {
    if (status === 'checking') {
      null;
    } else if (status === 'authenticated') {
      setIsLoading(false);
    } else {
      navigation('/login');
    }
  }, [status, navigation]);

  if (isLoading) return null;

  return <Outlet />;
}

function App() {
  const { theme } = useThemeContext();
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/tasks' element={<MyTasks />} />
          <Route path='/boards' element={<Boards />} />
          <Route path='/boards/:id' element={<BoardDetail />} />
        </Route>
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;