import React from "react";
import styled from "styled-components";
import { GridCol, GridContainer } from "../jss/FlexGrid";
import Text from "./Typography";
import Button from "./Button";
import { CopyIcon } from "./SVG";
import { IconBtn } from "./Navbar/AppBar/Profile";
import { Flex } from "./RecentActivities";

const Wrapper = styled.div`
  background: #f9fafc;
  border-radius: 24px;
  width: 100%;
  padding: 24px;
  width: 100%;
`;

const CardGridcontainer = styled(GridContainer)`
  padding: 0;
`;

const CardGridCol = styled(GridCol)`
  padding: 0;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  div {
    flex: 1;
  }
  &:last-child {
    margin-bottom: 0;
  }
  ${({ theme }) => theme.breakpoint.queryDown("sm")} {
    flex-direction: column;
  }
`;

const FundBtn = styled(Button)`
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    width: 100%;
    margin-bottom: 24px;
  }
`;

const CopiedTextAlert = styled(Text)`
  position: absolute;
  min-width: max-content;
  top: -20px;
  left: -30%;
  z-index: 2000;
  animation: 0.3s fadeIn 1 forwards;
`;

export default function CardDetails({ balance, name, status, address, date, variant }) {
  const [textCopied, setTextcopied] = React.useState(false);

  const handleAddressCopy = (text) => {
    navigator.clipboard.writeText(text).then(
      function () {
        setTextcopied(true);
        setTimeout(() => {
          setTextcopied(false);
        }, 1000);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };
  return (
    <Wrapper>
      <CardGridcontainer justify="space-between" mdDirection="row" direction="column-reverse">
        <CardGridCol col={12} md={8}>
          <DetailsRow>
            <div>
              <Text fontSize={16}>Card Balance:</Text>
            </div>
            <div>
              <Text fontSize={16} color="primary">
              {variant === "naira" ? "₦" : "$"}{balance || 0.0}
              </Text>
            </div>
          </DetailsRow>
          <DetailsRow>
            <div>
              <Text fontSize={16}>Name:</Text>
            </div>
            <div>
              <Text fontSize={16} color="greyDark">
                {name}
              </Text>
            </div>
          </DetailsRow>
          <DetailsRow>
            <div>
              <Text fontSize={16}>Card Status:</Text>
            </div>
            <div>
              <Text fontSize={16} color="greyDark">
                {status}
              </Text>
            </div>
          </DetailsRow>
          <DetailsRow>
            <div>
              <Text fontSize={16}>Billing Address:</Text>
            </div>
            <Flex>
              <Text fontSize={16} color="greyDark">
                {address}{" "}
              </Text>
                <IconBtn onClick={() => handleAddressCopy(address)}>
                  {/* Render alert when text is copied */}
                  {textCopied && (
                    <CopiedTextAlert fontSize={12} color="secondary">
                      Address copied to clipboard
                    </CopiedTextAlert>
                  )}
                  <CopyIcon />
                </IconBtn>
            </Flex>
          </DetailsRow>
          <DetailsRow>
            <div>
              <Text fontSize={16}>Date Created:</Text>
            </div>

            <div>
              <Text fontSize={16} color="greyDark">
                {date}
              </Text>
            </div>
          </DetailsRow>
        </CardGridCol>
        <FundBtn variant="outline" bg="primary">
          Fund Card
        </FundBtn>
      </CardGridcontainer>
    </Wrapper>
  );
}
