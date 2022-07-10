/**
 * Home route
 * ==========
 *
 * Home route is used to display the home page
 *
 */
import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/Directory.component';

const Home = () => {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;
