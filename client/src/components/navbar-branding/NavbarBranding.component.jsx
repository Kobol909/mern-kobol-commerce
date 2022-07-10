/**
 * Branding component
 * ==================
 *
 * This component is used to display the branding
 *
 */
import Logo from '../navbar-logo/NavbarLogo.component';

import { Title, Brand } from './NavbarBranding.styles';

const Branding = () => {
  return (
    <Brand>
      {/* <Logo /> */}
      <Title>Kobol Sounds</Title>
    </Brand>
  );
};

export default Branding;
