// TODO : Extract the router into this file.

// import { lazy, Suspense } from 'react';
// import { useLocation, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import ErrorBoundary from './ErrorBoundary';

// import { PUBLIC_ROUTES } from './utils/constants/routes';

// const Dashboard = lazy(() => import('./routes/dashboard/Dashboard.route'));

// const PublicRoutes = [
//   {
//     path: PUBLIC_ROUTE.HOME,
//     exact: true,
//     component: lazy(() => import('./routes/home/Home.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.PAGE_404,
//     component: lazy(() => import('./routes/page-404/Page404.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.PAGE_500,
//     component: lazy(() => import('./routes/page-500/Page500.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.SIGN_IN,
//     component: lazy(() => import('./routes/authentication/Authentication.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.SIGN_UP,
//     component: lazy(() => import('./routes/authentication/Authentication.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.FORGET_PASSWORD,
//     component: lazy(() => import('./routes/authentication/Authentication.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.RESET_PASSWORD,
//     component: lazy(() => import('./routes/authentication/Authentication.route'))
//   },
//   {
//     path: PUBLIC_ROUTE.AUTH0_CALLBACK,
//     component: lazy(() => import('./routes/authentication/Authentication.route'))
//   }
// ];

// function PrivateRoute({ children, ...rest }) {
//   let location = useLocation();

//   const isLoggedIn = useSelector((state) => state.Auth.idToken);

//   if (isLoggedIn) return <Route {...rest}>{children}</Route>;

//   return (
//     <Redirect
//       to={{
//         pathname: '/sign-in',
//         state: { from: location }
//       }}
//     />
//   );
// }

// export default function Routes() {
//   return (
//     <ErrorBoundary>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route>
//             {PublicRoutes.map((route, index) => (
//               <Route key={index} path={route.path} exact={route.exact}>
//                 <route.component />
//               </Route>
//             ))}
//             <PrivateRoute path="/dashboard">
//               <Dashboard />
//             </PrivateRoute>
//           </Route>
//         </Routes>
//       </Suspense>
//     </ErrorBoundary>
//   );
// }
