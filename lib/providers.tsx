'use client';

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

const environmentId = "-- update env id --";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId,
           walletConnectors: [SolanaWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}