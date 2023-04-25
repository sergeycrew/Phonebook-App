import { NavList, NavListItem, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <NavListItem>
        <StyledLink to="/register">Register</StyledLink>
      </NavListItem>
      <NavListItem>
        <StyledLink to="/login">Log In</StyledLink>
      </NavListItem>
    </NavList>
  );
};
