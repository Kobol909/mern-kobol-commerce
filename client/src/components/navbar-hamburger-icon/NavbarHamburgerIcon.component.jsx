/**
 * Hamburger icon component
 * ========================
 *
 * This component is used to display the hamburger icon
 *
 */
import { ReactComponent as HamburgerCross } from '../../assets/hamburger-cross.svg';

const HamburgerIcon = () => {
  return (
    <button className="align-middle focus:outline-none focus:shadow-outline rounded-lg sm:hidden">
      <HamburgerCross className="w-8 h-8 hover:fill-orange-500 dark:hover:fill-orange-500" />
    </button>
  );
};
export default HamburgerIcon;
