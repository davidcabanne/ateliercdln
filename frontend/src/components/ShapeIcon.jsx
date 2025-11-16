import styled from "styled-components";
import * as _var from "../styles/variables";

/**
 * Base SVG component used for all shapes.
 *
 * - Only adjusts width on tablets and below
 * - `!important` ensures custom widths don't override responsive rules
 */
const Svg = styled.svg`
  @media ${_var.device.tablet_max} {
    width: 32px !important;
  }
`;

/**
 * ShapeIcon
 *
 * Renders one of three geometric shapes as an SVG:
 *  - square
 *  - circle
 *  - triangle (optional rotation)
 *
 * @param {Object}   props
 * @param {"square"|"circle"|"triangle"} props.shape - Type of shape to display.
 * @param {string}   props.fill      - Fill color for the SVG shape.
 * @param {string|number} [props.width]    - CSS width for the icon (e.g. "40px").
 * @param {string|number} [props.minWidth] - Minimum width for layout consistency.
 * @param {boolean}  [props.rotate]  - Rotates triangle by 90° if true.
 *
 * @returns {JSX.Element|null}
 */
const ShapeIcon = ({
  shape,
  fill = "white",
  width = "32px",
  minWidth = "32px",
  rotate = false,
}) => {
  /**
   * Common attributes shared across all shapes.
   */
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 90 90",
    fill,
    style: {
      width,
      minWidth,
      ...(shape === "triangle" && rotate ? { transform: "rotate(90deg)" } : {}),
    },
  };

  return (
    <>
      {shape === "square" && (
        <Svg {...commonProps}>
          <rect width="90" height="90" />
        </Svg>
      )}
      {shape === "circle" && (
        <Svg {...commonProps}>
          <circle cx="45" cy="45" r="45" />
        </Svg>
      )}
      {shape === "triangle" && (
        <Svg {...commonProps}>
          <polygon points="90,90 0,90 45,0 " />
        </Svg>
      )}
    </>
  );
};

export default ShapeIcon;
