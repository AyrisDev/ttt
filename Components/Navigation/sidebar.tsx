"use client";

import cn from "classnames";
import AuthorCard from "@/components/ui/author-card";
import Logo from "@/components/ui/logo";
import Scrollbar from "@/components/ui/scrollbar";
import { menuItems } from "@/hooks/_menu-items";
import { MenuItem } from "@/components/ui/collapsible-menu";
import Button from "@/components/ui/button";
import { useDrawer } from "@/hooks/drawer-views/context";
import { Close } from "@/assets/icons/close";
//images
import AuthorImage from "@/assets/avatar.png";

export default function Sidebar({ className }: { className?: string }) {
  const { closeDrawer } = useDrawer();
  return (
    <aside
      className={cn(
        "top-0 z-40 h-full w-full max-w-full border-dashed left-0 border-r border-gray-700 bg-dark xs:w-80 xl:fixed  xl:w-72 2xl:w-80",
        className
      )}>
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}>
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>

      <Scrollbar style={{ height: "calc(100% - 96px)" }}>
        <div className="px-6 pb-5 2xl:px-8">
          <AuthorCard image={AuthorImage} name="Ayris.Dev" role="Developer" />

          <div className="mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={"default" + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
    </aside>
  );
}
