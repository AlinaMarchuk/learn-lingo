import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--text-color);

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;
