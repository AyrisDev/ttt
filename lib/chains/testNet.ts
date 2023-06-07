/**
 * remark: This is an example config file for a terra testnet chain and it should be deleted before merging.
 */
import type { Chain, AssetList } from "@chain-registry/types";

export const vinceTestnet: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "vinceTestnet",
  status: "live",
  network_type: "testnet",
  pretty_name: "vinceTestnet",
  chainId: "vince_1903-1",
  bech32_prefix: "vce",
  daemon_name: "vinced",
  node_home: "$HOME/.vinced",
  slip44: 330,
  fees: {
    fee_tokens: [
      {
        denom: "avce",
        fixed_min_gas_price: 0,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.15,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "avce",
      },
    ],
  },
  codebase: {
    git_repo: "https://github.com/terra-money/core",
    recommended_version: "v2.2.0",
    compatible_versions: ["v2.2.0"],
    cosmos_sdk_version: "0.45.10",
    tendermint_version: "0.34.22",
    cosmwasm_version: "0.27",
    cosmwasm_enabled: true,
  },
  apis: {
    rpc: [
      {
        address: "http://testnet.vincescan.com/",
      },
    ],
    rest: [
      {
        address: "http://154.53.47.14:1317",
      },
    ],
    grpc: [],
  },
  logo_URIs: {
    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
  },
  keywords: ["testnet"],
};

export const vinceTestnetAssets: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "vinceTestnet",
  assets: [
    {
      description: "The native token of Terra",
      denom_units: [
        {
          denom: "avce",
          exponent: 0,
          aliases: [],
        },
        {
          denom: "vce",
          exponent: 6,
          aliases: [],
        },
      ],
      base: "avce",
      name: "VCE",
      display: "vce",
      symbol: "VCE",
      logo_URIs: {
        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png",
      },
      coingecko_id: "terra",
      keywords: ["staking"],
    },
  ],
};
