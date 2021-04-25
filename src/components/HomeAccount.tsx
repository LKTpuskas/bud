import * as React from "react";
import styled from "styled-components";

import { HomeAccountProps, TransactionProps } from "../types/HomeAccount";
import { Balance } from "./Balance";
import { Provider } from "./Provider";
import { Transaction } from "./Transaction";

export const url = "http://www.mocky.io/v2/5c62e7c33000004a00019b05";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 48px;
  background: #e0e0e0;
  border-radius: 4px;
`;

const Column = styled.div`
  flex-direction: column;
`;

export function filterResult(transactions: TransactionProps[]) {
  return transactions
    .sort((a, b) => b.amount.value - a.amount.value)
    .filter(({ amount }, index) => amount.value < 0 && index <= 10);
}

function HomeAccount() {
  const [data, setData] = React.useState<HomeAccountProps | undefined | null>(
    null
  );
  const [error, setError] = React.useState(null);
  const fetchHomeAccount = async () => {
    try {
      await fetch(url).then((res) => {
        return res.json().then((data: HomeAccountProps) => {
          setData({
            ...data,
            transactions: filterResult(data.transactions),
          });
        });
      });
    } catch (error) {
      setError(error);
    }
  };

  React.useEffect(() => {
    fetchHomeAccount();
  }, []);

  if (!data || error) {
    return (
      <Wrapper>
        <h2 style={{ color: "black" }}>
          {!!error ? error.toString() : "LOADING"}
        </h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Column>
        <Transaction transactions={data.transactions} />
      </Column>
      <Column>
        <Provider {...data.provider} />
        <Balance {...data.balance} />
      </Column>
    </Wrapper>
  );
}

export default HomeAccount;
