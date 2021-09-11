import styled from "styled-components";

const TextStyle = styled("p")(
  ({ fontSize, lineHeight, align, display, fontWeight, color, transform, decoration, mt, mb, ml, mr, theme }) => ({
    fontSize: fontSize || 14,
    lineHeight: lineHeight !== undefined ? lineHeight : fontSize ? Number(fontSize) + 10 + "px" : "24px",
    fontWeight: fontWeight || 400,
    fontFamily: "Gilroy",
    color: theme.colors[color] || theme.colors.grey,
    textAlign: align || "left",
    marginLeft: ml,
    marginBottom: mb,
    marginRight: mr,
    marginTop: mt,
    textTransform: transform,
    textDecoration: decoration,
    display,
  })
);

export default function Text({ fontSize, align, fontWeight, color, children, lineHeight, ...rest }) {
  return (
    <TextStyle
      fontSize={fontSize}
      align={align}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      {...rest}
    >
      {children}
    </TextStyle>
  );
}
