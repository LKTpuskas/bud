import * as React from "react";
import styled from "styled-components";

import { ProviderProps } from "../types/HomeAccount";

export const ProviderWrapper = styled.div`
  border-radius: 12px;
  background: hsl(242deg 84% 77%);
  padding: 16px;
  margin-bottom: 16px;
`;

export const H3 = styled.h3`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: initial;
`;

export function Provider({
  title,
  description,
  sort_code,
  account_number,
}: ProviderProps) {
  return (
    <ProviderWrapper>
      <h2 style={{ marginBottom: 4 }}>{title}</h2>
      <H3>{description}</H3>
      <H3>Sort code: {sort_code}</H3>
      <H3>Account number: {account_number}</H3>
    </ProviderWrapper>
  );
}
