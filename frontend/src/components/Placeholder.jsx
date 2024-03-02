import styled from "styled-components";
import Image from "next/image";

import { urlFor } from "@/lib/imageUrlBuilder";
import * as _var from "../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${_var.spaceS};
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    border-radius: ${_var.spaceXS};
  }
`;

const Placeholder = ({ url, alt }) => {
  return (
    <Container>
      <Image
        src={urlFor(url).url()}
        alt={alt}
        fill
        sizes="(min-width: 600px) 50vw, 100vw"
        style={{ objectFit: "cover" }}
      />
    </Container>
  );
};

export default Placeholder;
