import { useAuth } from 'hooks';
import { NavList, NavListItem, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavList>
      <NavListItem>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </NavListItem>
    </NavList>
  );
};
