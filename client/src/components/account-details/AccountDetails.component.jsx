import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { signOutStart } from '../../store/user/user.actions';
import { selectCurrentUser } from '../../store/user/user.selector';

import { AccountDetailsContainer } from './AccountDetails.styles';

// For populating DB with dummy data
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import SHOP_DATA from '../../models/products.data';
import DASHBOARD_DATA from '../../models/users.data';

const AccountDetails = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  // const populateDB = () => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  //   addCollectionAndDocuments('users', DASHBOARD_DATA);
  // };

  const signOutUSer = () => dispatch(signOutStart(), handleSignOut());

  const handleSignOut = () => {
    navigate('/auth');
  };

  return (
    <>
      {currentUser && (
        <AccountDetailsContainer>
          <h1>Account Details</h1>

          {/* <button onClick={populateDB}>POPULATE DATABASE</button> */}

          <p>
            <strong>Username:</strong> {currentUser.displayName}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <p>
            <strong>Password:</strong> {currentUser.password}
          </p>
          <p>
            <strong>First Name:</strong> {currentUser.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {currentUser.lastName}
          </p>
          <p>
            <strong>Phone:</strong> {currentUser.phoneNumber}
          </p>
          <p>
            <strong>Address line 1:</strong> {currentUser.address}
          </p>
          <p>
            <strong>Address line 2:</strong> {currentUser.address}
          </p>
          <p>
            <strong>City:</strong> {currentUser.city}
          </p>
          <p>
            <strong>State:</strong> {currentUser.state}
          </p>
          <p>
            <strong>Zip:</strong> {currentUser.zip}
          </p>
          <p>
            <strong>Country:</strong> {currentUser.country}
          </p>

          <button onClick={signOutUSer}>Sign Out</button>
        </AccountDetailsContainer>
      )}
      {/* <Outlet /> */}
    </>
  );
};

export default AccountDetails;
