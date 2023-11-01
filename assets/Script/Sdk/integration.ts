// import React, { useContext, FC } from 'react';
// import * as SolWalletAdapter from '@solana/wallet-adapter-react';
import { Chain } from './types';

export function createTransport(chain: Chain, url: string) {
  console.log("Create transport: %s", chain);
  switch (chain) {
    case 'facade':
      // return new FacadeTransport(url);
    case 'solana-local':
    case 'solana-devnet':
  }
}
