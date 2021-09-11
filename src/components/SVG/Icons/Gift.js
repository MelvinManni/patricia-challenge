import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #979aa5;
`;

const Rect = styled.rect`
  width: 24px;
  height: 24px;
  fill: #979aa5;
`;

export default function Gift() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M18.4438 21H12.8188V15.272H19.3638V20.091C19.3638 20.593 18.9518 21 18.4438 21ZM4.6371 20.0905V15.2725H11.1821V21.0005H5.5571C5.0491 21.0005 4.6371 20.5925 4.6371 20.0905ZM20.1 7.09082H18.258C18.437 6.71782 18.546 6.30482 18.546 5.86282C18.546 4.28482 17.261 2.99982 15.682 2.99982C13.801 2.99982 12.661 4.31982 12 5.56882C11.339 4.31982 10.2 2.99982 8.319 2.99982C6.74 2.99982 5.454 4.28482 5.454 5.86282C5.454 6.30482 5.564 6.71782 5.743 7.09082H3.901C3.404 7.09082 3 7.67682 3 8.40082V12.3268C3 13.0498 3.404 13.6368 3.901 13.6368H4.637H11.182V7.09082H12.819V13.6368H19.364H20.1C20.597 13.6368 21 13.0498 21 12.3268V8.40082C21 7.67682 20.597 7.09082 20.1 7.09082ZM15.682 7.09082H13.101C13.487 6.07482 14.281 4.63682 15.682 4.63682C16.359 4.63682 16.91 5.18682 16.91 5.86282C16.91 6.53982 16.359 7.09082 15.682 7.09082ZM8.319 7.09082C7.642 7.09082 7.091 6.53982 7.091 5.86282C7.091 5.18682 7.642 4.63682 8.319 4.63682C9.72 4.63682 10.514 6.07482 10.9 7.09082H8.319Z" />
      <mask id="mask0" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4438 21H12.8188V15.272H19.3638V20.091C19.3638 20.593 18.9518 21 18.4438 21ZM4.6371 20.0905V15.2725H11.1821V21.0005H5.5571C5.0491 21.0005 4.6371 20.5925 4.6371 20.0905ZM20.1 7.09082H18.258C18.437 6.71782 18.546 6.30482 18.546 5.86282C18.546 4.28482 17.261 2.99982 15.682 2.99982C13.801 2.99982 12.661 4.31982 12 5.56882C11.339 4.31982 10.2 2.99982 8.319 2.99982C6.74 2.99982 5.454 4.28482 5.454 5.86282C5.454 6.30482 5.564 6.71782 5.743 7.09082H3.901C3.404 7.09082 3 7.67682 3 8.40082V12.3268C3 13.0498 3.404 13.6368 3.901 13.6368H4.637H11.182V7.09082H12.819V13.6368H19.364H20.1C20.597 13.6368 21 13.0498 21 12.3268V8.40082C21 7.67682 20.597 7.09082 20.1 7.09082ZM15.682 7.09082H13.101C13.487 6.07482 14.281 4.63682 15.682 4.63682C16.359 4.63682 16.91 5.18682 16.91 5.86282C16.91 6.53982 16.359 7.09082 15.682 7.09082ZM8.319 7.09082C7.642 7.09082 7.091 6.53982 7.091 5.86282C7.091 5.18682 7.642 4.63682 8.319 4.63682C9.72 4.63682 10.514 6.07482 10.9 7.09082H8.319Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <Rect />
      </g>
    </svg>
  );
}
