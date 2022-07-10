/**
 * Button component
 * ================
 *
 * This component is used to generate different types of buttons.
 *
 */
import {
  AddToCartButton,
  BaseButton,
  BuyNowButton,
  CheckoutButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
  LearnMoreButton,
  SignInButton,
  SignUpButton,
  ThemeToggleButton,
  SubscribeButton
} from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  addToCart: 'addToCart',
  base: 'base',
  buyNow: 'buyNow',
  checkout: 'checkout',
  google: 'google-sign-in',
  inverted: 'inverted',
  learnMore: 'learnMore',
  signIn: 'signIn',
  signUp: 'signUp',
  themeToggle: 'themeToggle',
  subscribe: 'subscribe'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.addToCart]: AddToCartButton,
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.buyNow]: BuyNowButton,
    [BUTTON_TYPE_CLASSES.checkout]: CheckoutButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.learnMore]: LearnMoreButton,
    [BUTTON_TYPE_CLASSES.signIn]: SignInButton,
    [BUTTON_TYPE_CLASSES.signUp]: SignUpButton,
    [BUTTON_TYPE_CLASSES.themeToggle]: ThemeToggleButton,
    [BUTTON_TYPE_CLASSES.subscribe]: SubscribeButton
  }[buttonType]);

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
