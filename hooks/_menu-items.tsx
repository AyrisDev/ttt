import routes from "@/hooks/routes";
import { HomeIcon } from "@/assets/icons/home";
import { FarmIcon } from "@/assets/icons/farm";
import { PoolIcon } from "@/assets/icons/pool";
import { ProfileIcon } from "@/assets/icons/profile";
import { DiskIcon } from "@/assets/icons/disk";
import { ExchangeIcon } from "@/assets/icons/exchange";
import { VoteIcon } from "@/assets/icons/vote-icon";
import { PlusCircle } from "@/assets/icons/plus-circle";
import { CompassIcon } from "@/assets/icons/compass";
import { LivePricing } from "@/assets/icons/live-pricing";

export const menuItems = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: "Live Pricing",
    icon: <LivePricing />,
    href: routes.livePricing,
  },
  {
    name: "Farm",
    icon: <FarmIcon />,
    href: routes.farms,
  },
  {
    name: "Swap",
    icon: <ExchangeIcon />,
    href: routes.swap,
  },
  {
    name: "Liquidity",
    icon: <PoolIcon />,
    href: routes.liquidity,
  },
  {
    name: "NFTs",
    icon: <CompassIcon />,
    href: routes.search,
    dropdownItems: [
      {
        name: "Explore NFTs",
        icon: <CompassIcon />,
        href: routes.search,
      },
      {
        name: "Create NFT",
        icon: <PlusCircle />,
        href: routes.createNft,
      },
      {
        name: "NFT Details",
        icon: <DiskIcon />,
        href: routes.nftDetails,
      },
    ],
  },
  {
    name: "Profile",
    icon: <ProfileIcon />,
    href: routes.profile,
  },
  {
    name: "Vote",
    icon: <VoteIcon />,
    href: routes.vote,
    dropdownItems: [
      {
        name: "Explore",
        href: routes.vote,
      },
      {
        name: "Vote with pools",
        href: routes.proposals,
      },
      {
        name: "Create proposal",
        href: routes.createProposal,
      },
    ],
  },
];
