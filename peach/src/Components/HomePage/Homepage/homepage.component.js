import React from "react";
import { Header } from "../header/header.component";
import WhatWeDo from "../WhatWeDo/what-we-do.component";
import { Philosophy } from "../Philosophy/philosophy.component";
import { CoreStack } from "../corestacks/core-stack.component";
import {HomepageWrapper} from "./homepages.styles"
// import {Integrations} from './Integrations'
// import Team from './Team'
// import Footer from './footer'

const HomePage = () => {
  return (
    <HomepageWrapper>
      <Header />
      {/* <WhatWeDo />
      <Philosophy />
      <CoreStack /> */}

      {/* <Integrations/>
        <Team/>
        <Footer/> */}
    </HomepageWrapper>
  );
};

export default HomePage;
