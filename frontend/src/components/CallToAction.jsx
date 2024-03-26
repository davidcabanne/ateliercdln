import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  cursor: pointer;

  @media ${_var.device.tablet_min} {
    display: none;
  }
  @media ${_var.device.tablet_max} {
    display: flex;
    justify-content: flex-end;
    padding-bottom: ${_var.spaceM};
    gap: ${_var.spaceS};

    p,
    a {
      font-size: 24px;
      text-transform: uppercase;
    }
  }
`;

const CallToAction = ({ activePosts, handleRenderProjects }) => {
  return (
    <Container onClick={handleRenderProjects}>
      {!activePosts ? (
        <p>Voir plus de projets</p>
      ) : (
        <a href="/#top">Back To Top</a>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 90 90"
        style={{
          width: "18px",
          transform: !activePosts ? "rotate(90deg)" : "rotate(0deg)",
        }}
      >
        <polygon points="90,90 0,90 45,0 " />
      </svg>
    </Container>
  );
};

export default CallToAction;
