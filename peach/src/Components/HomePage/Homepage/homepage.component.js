import React from "react";
import { Header } from "../header/header.component";
import WhatWeDo from "../WhatWeDo/what-we-do.component";
import { Philosophy } from "../Philosophy/philosophy.component";
import { CoreStack } from "../corestacks/core-stack.component";
import {HomepageWrapper} from "./homepages.styles"
import {Integrations} from '../Integration/integrations.component'
import {ContactForm} from "../contact-form/contact-form.component"
import {Become} from "../become/become.component"
import {AboutUs} from "../about-us/about-us.component"
import Footer from '../footer/footer.component'

const HomePage = () => {
  return (
    <HomepageWrapper>
      <Header />
      <WhatWeDo />
      <Philosophy />
      <CoreStack />
      <Integrations/>
      <ContactForm/>
      <Become/>
      <AboutUs/>
      <Footer/>
    </HomepageWrapper>
  );
};

export default HomePage;
