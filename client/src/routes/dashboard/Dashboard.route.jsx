/**
 * Dashboard route
 * ===============
 *
 * Dashboard route is used to display the dashboard page
 *
 */
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar.component';

import AccountDetails from '../../components/account-details/AccountDetails.component';
import Downloads from '../../components/downloads/Downloads.component';
import Orders from '../../components/orders/Orders.component';
import PaymentMethods from '../../components/payment-methods/PaymentMethods.component';

import { DashboardContainer } from './Dashboard.styles';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route index element={<AccountDetails />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment-methods" element={<PaymentMethods />} />
      </Routes>
    </>
  );
};

export default Dashboard;
