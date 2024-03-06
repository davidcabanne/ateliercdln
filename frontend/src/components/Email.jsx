import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 200px ${_var.spaceL};
  margin-top: 256px;
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    padding: 128px ${_var.spaceM};
  }

  @media ${_var.device.laptop_max} {
    margin-top: 0px;
  }
`;

const Email = () => {
  return (
    <Container>
      <h1>Hello@ateliercdln.com</h1>
    </Container>
  );
};

export default Email;
