import * as React from "react";
import styled from "styled-components";

import { H3 } from "./Provider";
import { TransactionProps } from "../types/HomeAccount";

const TransactionWrapper = styled.table`
  border-radius: 12px;
  background: #767676bd;
  padding: 24px;
`;

const TD = styled.td`
  padding-right: 12px;
  padding-bottom: 12px;
  &:last-child {
    padding-right: 0;
  }
`;

const H2 = styled.h2`
  margin-bottom: 8px;
`;

export function Transaction({
  transactions,
}: {
  transactions: TransactionProps[];
}) {
  return (
    <TransactionWrapper>
      <tbody>
        <tr>
          <th>
            <H2>Transactions</H2>
          </th>
        </tr>
        <tr>
          <th>
            <H3>Category</H3>
          </th>
          <th>
            <H3>Description</H3>
          </th>
        </tr>
        {transactions.map(
          ({ description, category_title, amount, date, id }) => (
            <tr key={id}>
              <TD>{category_title}</TD>
              <TD>{description}</TD>
              <TD>{amount.value}</TD>
              <TD>{date}</TD>
            </tr>
          )
        )}
      </tbody>
    </TransactionWrapper>
  );
}
