/** @format */

import styled from "@emotion/styled";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  min-width: 200px;
  margin-left: 50px;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12;
  font-weight: 700;
  color: #2a363b;
  font-size: 20px;

  &.active {
    color: #e84a5f;
  }
`;
