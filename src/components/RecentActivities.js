import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import styled from "styled-components";
import Spacing from "../jss/Spacing";
import { recentActivities } from "../variables";
import ActivityRow from "./ActivityRow";
import { CalendarIcon } from "./SVG";
import Text from "./Typography";

const Wrapper = styled.div`
  border-radius: 24px;
  width: 100%;
  padding: 24px 24px 42px 24px;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  @media all and (max-width: 1140px) {
    flex-direction: column;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const DateHolder = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const DownloadWrapper = styled.div`
  background: #c0ccda;
  mix-blend-mode: normal;
  width: 20px;
  height: 14px;
  border-radius: 4px;
  position: relative;
  font-size: 13px;
  display: flex;
  justify-content: center;
  svg {
    position: absolute;
    top: -30%;
  }
`;
const DateInputWrapper = styled.div`
  position: relative;
  display: inline;
  cursor: pointer;
`;

const DateInput = styled.input`
  position: absolute;
  width: 100%;
  left: -20px;
  opacity: 0;
`;

export default function RecentActivities() {
  const [date, setDate] = React.useState(null);

  const formatDate = (dateParams) => {
    if (!dateParams) {
      return null;
    }
    const d = new Date(dateParams);
    const day = d.getDate() <= 9 ? "0" + d.getDate() : d.getDate();
    const month = d.getMonth() <= 8 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    const year = d.getFullYear()?.toString()?.substring(2);

    return `${day}/${month}/${year}`;
  };
  return (
    <Wrapper>
      <Header>
        <Text>Recent Activity</Text>
        <Flex>
          <DateHolder>
            <Spacing mr={8}>
              <CalendarIcon />{" "}
            </Spacing>
            <Text display="inline">
              <Text fontSize={12} display="inline">
                Start Date
              </Text>
              :{" "}
              <DateInputWrapper>
                <Text display="inline" fontSize={12}>
                  {formatDate(date) || "01/02/21"}
                </Text>
                <DateInput onChange={({ target }) => setDate(target.value)} type="date" />
              </DateInputWrapper>
            </Text>
          </DateHolder>
          <Spacing ml={10}>
            <DownloadWrapper>
              <FaLongArrowAltDown />
            </DownloadWrapper>
          </Spacing>
        </Flex>
      </Header>
      {recentActivities.map((item, index) => (
        <ActivityRow icon={item.icon} price={item.price} time={item.time} title={item.title} key={index.toString()} />
      ))}
    </Wrapper>
  );
}
