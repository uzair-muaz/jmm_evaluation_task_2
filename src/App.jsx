import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import CreateSalesInvoice from './Pages/CreateSalesInvoice';
import Employees from './Pages/Employees';
import Layout from './Pages/Layout';
import SalesInvoice from './Pages/SalesInvoice';
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
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="/sales/sales-invoice" element={<SalesInvoice />} />
            <Route
              path="/sales/create-sales-invoice"
              element={<CreateSalesInvoice />}
            />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
