import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const NavListItem = styled.li`
  list-style: none;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  color: #19376d;

  &.active {
    font-size: 20px;
    color: #2196f3;

    border-bottom: 1.5px solid #2196f3;
  }
`;
