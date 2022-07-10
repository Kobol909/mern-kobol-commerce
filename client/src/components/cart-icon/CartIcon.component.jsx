/**
 * Cart icon component
 * ===================
 *
 * This component is used to display the cart icon
 *
 */
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import { CartIconContainer, ItemCount } from './CartIcon.styles';

const CartIconComponent = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <CartIcon style={{ margin: 'auto' }} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIconComponent;
