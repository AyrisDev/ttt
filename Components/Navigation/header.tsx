"use client";
import { useRouter } from "next/navigation";
import cn from "classnames";
import LogoIcon from "@/components/ui/logo-icon";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import Hamburger from "@/components/ui/hamburger";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useDrawer } from "@/hooks/drawer-views/context";
import WalletConnect from "../chains/walletConnect";
import routes from "@/hooks/routes";

function HeaderRightArea() {
  return (
    <div className="relative order-last flex shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
      <WalletConnect />
    </div>
  );
}

export default function Header({ className }: { className?: string }) {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { openDrawer } = useDrawer();
  const windowScroll = useWindowScroll();

  return (
    <nav
      className={cn(
        "sticky top-0 z-30 h-16 w-full transition-all duration-300 ltr:right-0 rtl:left-0 sm:h-20 3xl:h-24",
        (isMounted && windowScroll.y) > 2
          ? "bg-gradient-to-b f shadow-card backdrop-blur from-dark to-dark/80"
          : "",
        className
      )}>
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 3xl:px-10">
        <div className="flex items-center">
          <div
            onClick={() => router.push(routes.home)}
            className="flex items-center xl:hidden">
            <LogoIcon />
          </div>
          <div className="mx-2 block sm:mx-4 xl:hidden">
            <Hamburger
              isOpen={false}
              variant="transparent"
              onClick={() => openDrawer("DASHBOARD_SIDEBAR")}
              className="text-white"
            />
          </div>
        </div>
        <HeaderRightArea />
      </div>
    </nav>
  );
}
