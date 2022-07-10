/**
 * Navigation component route
 * ==========================
 *
 */
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Branding from '../../components/navbar-branding/NavbarBranding.component';
import CartIconComponent from '../../components/cart-icon/CartIcon.component';
import CartDropdown from '../../components/cart-dropdown/CartDropdown.component';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.actions';

import { NavigationContainer, NavbarLinks, NavbarLink, LogoContainer } from './Navigation.styles';
import { Main } from '../../resources/styles/GlobalStyle';

const Navigation = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUSer = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Branding />
        </LogoContainer>

        <NavbarLinks>
          <NavbarLink to="/shop">SHOP</NavbarLink>

          <NavbarLink to="/dashboard">DASHBOARD</NavbarLink>

          {currentUser ? (
            <NavbarLink as="span" onClick={signOutUSer}>
              SIGN OUT
            </NavbarLink>
          ) : (
            <NavbarLink to="/auth">SIGN IN</NavbarLink>
          )}

          <CartIconComponent />
          {isCartOpen && <CartDropdown />}
          {children}
        </NavbarLinks>
      </NavigationContainer>

      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Navigation;
