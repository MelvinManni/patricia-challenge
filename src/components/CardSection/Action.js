import React from "react";
import Spacing from "../../jss/Spacing";
import Button from "../Button";
import { Flex } from "../RecentActivities";

export default function Action() {
  return (
    <Flex>
      <Spacing mr={16}>
        <Button variant="outline" bg="primary">
          Freeze Card
        </Button>
      </Spacing>
      <Button variant="outline" bg="alert">
        Delete Card
      </Button>
    </Flex>
  );
}
