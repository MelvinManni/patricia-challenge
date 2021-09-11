export const theme = {
  colors: {
    primary: "#006156",
    secondary: "#FFCE00",
    secondaryLight: "#FFEEA7",
    pastel: "#DEF5F2",
    white: "#ffffff",
    grey: "#9DA8B6",
    greyDark: "#575A65",
    alert: "#EA2222",
  },
  breakpoint: {
    queryUp: handleBreakpoint,
    queryDown: handleDownBreakpoint,
  },
};

function handleBreakpoint(width = "xs") {
  switch (width?.toLowerCase()) {
    case "xs":
      return "@media all and (min-width: 0px)";
    case "sm":
      return "@media all and (min-width: 576px)";
    case "md":
      return "@media all and (min-width: 768px)";
    case "lg":
      return "@media all and (min-width: 992px)";
    case "xl":
      return "@media all and (min-width: 1200px)";
    default:
      break;
  }
}

function handleDownBreakpoint(width = "xs") {
  switch (width?.toLowerCase()) {
    case "xs":
      return "@media all and (max-width: 320px)";
    case "sm":
      return "@media all and (max-width: 576px)";
    case "md":
      return "@media all and (max-width: 768px)";
    case "lg":
      return "@media all and (max-width: 992px)";
    case "xl":
      return "@media all and (max-width: 1200px)";
    default:
      break;
  }
}
