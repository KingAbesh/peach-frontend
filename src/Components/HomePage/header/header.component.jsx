import React from "react";
import childheaderimage from "../../../Peach/undraw_creative_process_q6aw.svg";
import logo from "../../../Peach/Group.svg";
import {HeaderWrapper} from "./header.styles"


export const Header = () => (
  <HeaderWrapper>
      <div className="header__div">
        <div className="img__div">
          <img className="pl-3" src={logo} alt="logo" />
        </div>
        <div>
        <h2>
          Peach remains steadfast and committed to progressive innovations for
          the benefit of one and all
        </h2>
        </div>
      </div>
      <div className="header__div div2">
        <img src={childheaderimage} alt="header_image" />
      </div>
  </HeaderWrapper>
);
