import * as React from "react";

import { BalanceProps } from "../types/HomeAccount";
import { ProviderWrapper, H3 } from "./Provider";

export function Balance({ amount, currency_iso }: BalanceProps) {
  return (
    <ProviderWrapper>
      <H3>
        Balance: {currency_iso}
        {amount}
      </H3>
    </ProviderWrapper>
  );
}
