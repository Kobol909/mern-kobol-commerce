/**
 * Logo component
 * ==============
 *
 * This component is used to display the logo
 *
 */
import { ReactComponent as LogoGorilla } from '../../assets/logo.svg';

import { LogoContainer } from './NavbarLogo.styles';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoGorilla />
    </LogoContainer>
  );
};

export default Logo;
