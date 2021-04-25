import * as React from "react";
import styled from "styled-components";

import HomeAccount from "./HomeAccount";

const MainWrapper = styled.main`
  margin: 8px;
  height: 100vh;
`;

const ContentWrapper = styled.section`
  color: #fff;
`;

const Header = styled.header`
  color: #4f4f4f;
  font-size: 32px;
  margin-bottom: 28px;
  margin-left: 24px;
`;

const Content = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <Header>
          <h1>bud</h1>
        </Header>
      </ContentWrapper>
      <ContentWrapper>
        <HomeAccount />
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Content;
