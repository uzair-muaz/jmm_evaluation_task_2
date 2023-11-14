import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import Employees from './Pages/Employees';
import Error from './pages/Error';
import RequireAuth from './pages/RequireAuth';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <CssBaseline />
      <Toaster />
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<SignIn />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard/employees" element={<Employees />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
