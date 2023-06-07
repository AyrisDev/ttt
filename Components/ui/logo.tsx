import { useRouter } from "next/navigation";
import Image from "@/components/ui/image";
import AnchorLink from "@/components/ui/links/anchor-link";
import lightLogo from "@/assets/avatar.png";
import routes from "@/hooks/routes";

export default function Logo() {
  const router = useRouter();

  return (
    <AnchorLink
      href={{
        pathname: routes.home,
      }}
      className="flex w-28 outline-none sm:w-32 4xl:w-36">
      <span className="relative flex overflow-hidden">
        <Image src={lightLogo} alt="VinceChain" height={48} priority />
      </span>
    </AnchorLink>
  );
}
