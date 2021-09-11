import React from "react";
import Spacing from "../../jss/Spacing";
import Action from "./Action";
import Display from "./Display";
import Header from "./Header";

export default function CardDisplaySection() {
  return (
    <Spacing mb={48}>
      <Spacing mb={27}>
        <Header />
      </Spacing>
      <Display />
      <Spacing mt={24}>
        <Action />
      </Spacing>
    </Spacing>
  );
}
