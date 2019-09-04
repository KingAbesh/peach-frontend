import React, { Fragment } from 'react';
import { Header } from './Header';
import WhatWeDo from './WhatWeDo';
import { Philosophy } from './Philosophy';
import { CoreStack } from './CoreStack';
import {Integrations} from './Integrations'
import Team from './Team'
import Footer from './footer'

const HomePage = () => {
  return (
    <Fragment>
        <Header />
        <WhatWeDo />
        <Philosophy />
        <CoreStack />
        <Integrations/>
        <Team/>
        <Footer/>
    </Fragment>
  );
};

export default HomePage;
