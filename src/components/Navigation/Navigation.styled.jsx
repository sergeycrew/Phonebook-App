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
  ont-size: 30px;
  margin: 0px 30px;
  font-family: 'Julius Sans One', sans-serif;
  font-weight: 400;
  color: #205295;
  text-transform: uppercase;
  &.active {
    font-size: 25px;
    color: #205295;
    text-transform: uppercase;
  }
`;
