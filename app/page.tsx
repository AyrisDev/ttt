"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
//import { getPools } from "@/lib/api/apiHooks";
import {
  useAccount,
  useActiveChain,
  useBalance,
  useBalances,
  useBalanceStaked,
  useSendTokens,
} from "@ayris-dev/cosmoshooks";

export default async function Page() {
  const { data: account, isConnected } = useAccount();
  const { data: atomBalance, isLoading, refetch } = useBalance("avce");
  const activeChain = useActiveChain();
  const [address, setAddress] = useState();
  const { data: balances } = useBalances(address);
  const { data: coin } = useBalanceStaked(address);

  useEffect(() => {
    if (isConnected) {
      setAddress(account.bech32Address);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col">
        {isConnected ? (
          <>
            <div>
              {account ? (
                <p> Wallet Address : {account.bech32Address} </p>
              ) : (
                isConnected
              )}
            </div>
            <div>
              <span>Connected to : {activeChain.chainId}</span>
            </div>

            {isLoading ? (
              "Fetching balances..."
            ) : (
              <div>
                <div className="flex flex-wrap space-x-2">
                  <span>Wallet Chain Denom Balance :</span>
                  <span>
                    {atomBalance.amount / 1000000000000000000}
                    {atomBalance.denom.slice(1, 6)}
                  </span>
                </div>

                <div className="flex flex-wrap space-x-2">
                  <span>Wallet Assets :</span>
                  <ul>
                    {balances?.map((coin) => (
                      <li key={coin.denom}>
                        {coin.amount / 1000000000000000000}
                        {coin.denom.slice(1, 6)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap space-x-2">
                  <span>Staked Balance :</span>
                  <span>
                    {coin.amount / 1000000000000000000}
                    {coin.denom.slice(1, 6)}
                  </span>
                </div>
                <div></div>
              </div>
            )}

            <div className="flex flex-wrap space-x-2">
              <span>NameServices :</span>
              <div></div>
            </div>
          </>
        ) : (
          <div>Please Connect Wallet</div>
        )}
      </div>
    </>
  );
}
