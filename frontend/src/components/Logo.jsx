import styled from "styled-components";
import * as _var from "../styles/variables";

import ShapeIcon from "./Icons/ShapeIcon";

const Container = styled.div`
  display: flex;
  gap: ${_var.spaceXS};
`;

const Logo = ({ fill, rotate, width }) => {
  return (
    <Container>
      <ShapeIcon shape="circle" fill={fill} width={width ? width : 48} />
      <ShapeIcon shape="square" fill={fill} width={width ? width : 48} />
      <ShapeIcon
        shape="triangle"
        fill={fill}
        width={width ? width : 48}
        rotate={rotate}
      />
    </Container>
  );
};

export default Logo;
