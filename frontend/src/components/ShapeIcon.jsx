import styled from "styled-components";
import * as _var from "../styles/variables";

const Svg = styled.svg`
  @media ${_var.device.tablet_max} {
    width: 32px !important;
  }
`;

const ShapeIcon = ({ shape, fill, width, minWidth, rotate }) => {
  return (
    <>
      {shape === "square" && (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 90 90"
          fill={fill}
          style={{ width: width, minWidth: minWidth }}
        >
          <rect width="90" height="90" />
        </Svg>
      )}
      {shape === "circle" && (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 90 90"
          fill={fill}
          style={{ width: width, minWidth: minWidth }}
        >
          <circle cx="45" cy="45" r="45" />
        </Svg>
      )}
      {shape === "triangle" && (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 90 90"
          fill={fill}
          style={{
            width: width,
            minWidth: minWidth,
            transform: rotate && "rotate(90deg)",
          }}
        >
          <polygon points="90,90 0,90 45,0 " />
        </Svg>
      )}
    </>
  );
};

export default ShapeIcon;
