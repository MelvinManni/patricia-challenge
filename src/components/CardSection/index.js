import React from "react";
import Spacing from "../../jss/Spacing";
import Action from "./Action";
import Display from "./Display";
import Header from "./Header";

export default function CardDisplaySection({activeIndex, data, activeIndexhandler}) {
  return (
    <Spacing mb={48}>
      <Spacing mb={27}>
        <Header />
      </Spacing>
      <Display activeIndex={activeIndex} data={data} activeIndexhandler={activeIndexhandler} />
      <Spacing mt={24}>
        <Action />
      </Spacing>
    </Spacing>
  );
}
