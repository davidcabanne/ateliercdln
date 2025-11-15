import styled from "styled-components";
import * as _var from "../../../../styles/variables";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  cursor: none;
  background: black;

  @media ${_var.device.tablet_max} {
    cursor: pointer !important;
  }
`;

const Span = styled.span`
  position: relative;
  color: ${_var.primary_070};
  text-align: center;
  padding: ${_var.spaceM};
`;

const Skeleton = () => {
  return (
    <Container>
      <Span>
        The requested link is not available anymore, please try again later.
      </Span>
    </Container>
  );
};

export default Skeleton;
