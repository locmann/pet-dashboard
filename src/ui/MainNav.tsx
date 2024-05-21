import styled from 'styled-components';
import Logo from 'ui/Logo.tsx';
import { NavLink } from 'react-router-dom';
import {
  BsFillHouseDoorFill,
  BsCalendar2DateFill,
  BsFillHouseFill,
  BsPeopleFill,
  BsFillGearFill,
} from 'react-icons/bs';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <>
      <Logo />
      <NavList>
        <StyledNavLink to="/dashboard">
          <BsFillHouseDoorFill />
          <span>Dashboard</span>
        </StyledNavLink>
        <StyledNavLink to="/bookings">
          <BsCalendar2DateFill />
          <span>Bookings</span>
        </StyledNavLink>
        <StyledNavLink to="/cabins">
          <BsFillHouseFill />
          <span>Cabins</span>
        </StyledNavLink>
        <StyledNavLink to="/users">
          <BsPeopleFill />
          <span>Users</span>
        </StyledNavLink>
        <StyledNavLink to="/settings">
          <BsFillGearFill />
          <span>Settings</span>
        </StyledNavLink>
      </NavList>
    </>
  );
}

export default MainNav;
