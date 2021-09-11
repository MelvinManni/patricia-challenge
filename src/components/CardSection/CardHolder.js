import React from "react";
import CardDesignNaira from "../SVG/CardDesignNaira";
import CardDesignDollar from "../SVG/CardDesignDollar";
import Text from "../Typography";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Flex } from "../RecentActivities";
import Spacing from "../../jss/Spacing";
import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 312px;
  position: relative;
  overflow: hidden;
`;

const VisibilityIcon = styled.div`
  position: absolute;
  color: ${({ variant, theme }) => (variant === "naira" ? theme.colors.dark : theme.colors.white)};
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 90px;
  right: 20px;
  left: 20px;
`;

const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 126px;
  right: 20px;
  left: 20px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 164px;
  right: 20px;
  left: 20px;
`;

export default function CardHolder({ variant, number, expiry, name, cvv, balance }) {
  const [detailsVisible, setDetailsVisible] = React.useState(true);
  const [cvvVisible, setCvvVisible] = React.useState(true);

  const renderText = (text = "") => {
    if (detailsVisible) {
      return text;
    }

    const asterixCount = [];

    text.split("").forEach(() => {
      asterixCount.push("*");
    });

    return asterixCount.join("");
  };

  const renderCardNumber = (cardNumber = "") => {
    const length = Math.ceil(cardNumber.length / 4);
    const numArray = [];
    for (let index = 0; index < length; index++) {
      numArray.push(cardNumber.substring(4 * index, 4 * index + 4));
    }

    console.log(numArray);
    return numArray;
  };

  return (
    <CardWrapper>
      {variant === "naira" ? <CardDesignNaira /> : <CardDesignDollar />}
      <VisibilityIcon variant={variant} onClick={() => setDetailsVisible(!detailsVisible)}>
        {detailsVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
      </VisibilityIcon>

      <NumberWrapper>
        {renderCardNumber(number).map((text, index) => (
          <Text key={index.toString()} color={variant === "naira" ? "black" : "white"} fontSize={20} mr={2}>
            {renderText(text)}
          </Text>
        ))}
      </NumberWrapper>
      <BalanceWrapper>
        <Text fontSize={11} color={variant === "naira" ? "black" : "white"} fontWeight={300} mr={6}>
          Balance
        </Text>
        <Text color={variant === "naira" ? "black" : "white"} fontSize={13}>
          {renderText((variant === "naira" ? "₦" : "$") + balance)}
        </Text>
      </BalanceWrapper>

      <BottomWrapper>
        <Text fontSize={11} color={variant === "naira" ? "black" : "white"} mr={24} fontWeight={300}>
          {name}
        </Text>
        <Flex>
          <Spacing mr={5}>
            <Text lineHeight={1} fontSize={7} color={variant === "naira" ? "black" : "white"} fontWeight={300}>
              VALID
            </Text>
            <Text lineHeight={1} fontSize={7} color={variant === "naira" ? "black" : "white"} fontWeight={300}>
              THRU
            </Text>
          </Spacing>

          <Text fontSize={11} color={variant === "naira" ? "black" : "white"} mr={24} fontWeight={300}>
            {renderText(expiry)}
          </Text>
        </Flex>

        <Flex>
          <Text display="inline" fontSize={8} mr={2} color={variant === "naira" ? "black" : "white"} fontWeight={300}>
            cvv
          </Text>
          <Text
            onClick={() => setCvvVisible(!cvvVisible)}
            display="inline"
            fontSize={10}
            color={variant === "naira" ? "black" : "white"}
            className="pointer"
            fontWeight={300}
          >
            {cvvVisible && detailsVisible ? cvv : "***"}
          </Text>
        </Flex>
      </BottomWrapper>
    </CardWrapper>
  );
}
