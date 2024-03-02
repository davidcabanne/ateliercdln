import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 200px ${_var.spaceL};


@media ${_var.device.tablet_max} {
  padding: 128px ${_var.spaceM};
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
