import { Navigation } from 'components/Navigation/Navigation';
import { HeaderSection } from './Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderSection>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderSection>
  );
};

export default Header;
