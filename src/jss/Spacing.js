import styled from "styled-components";

const SpacingStyle = styled("div")(({ mt, mb, ml, mr, mx, my, pt, pb, pl, pr, px, py }) => ({
  marginLeft: ml || mx,
  marginBottom: mb || my,
  marginRight: mr || mx,
  marginTop: mt || my,
  paddingLeft: pl || px,
  paddingBottom: pb || py,
  paddingRight: pr || px,
  paddingTop: pt || py,
}));

export default function Spacing({ mt, mb, ml, mr, mx, my, pt, pb, pl, pr, px, py, children }) {
  return (
    <SpacingStyle mt={mt} mb={mb} mr={mr} ml={ml} mx={mx} my={my} pr={pr} pt={pt} pb={pb} pl={pl} px={px} py={py}>
      {children}
    </SpacingStyle>
  );
}
