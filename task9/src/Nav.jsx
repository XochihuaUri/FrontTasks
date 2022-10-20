import styled from "styled-components";

function Nav() {
  return <NavStyled></NavStyled>;
}

const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6vh;
  background-color: pink;
`;

export default Nav;
