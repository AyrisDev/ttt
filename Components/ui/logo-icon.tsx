import Image from "@/components/ui/image";
import { useIsMounted } from "@/hooks/use-is-mounted";
import lightLogo from "@/assets//avatar.png";

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
  const isMounted = useIsMounted();

  return (
    <div className="flex cursor-pointer outline-none" {...props}>
      <span className="relative flex overflow-hidden">
        {isMounted && (
          <Image src={lightLogo} alt="Criptic" priority width={28} />
        )}
      </span>
    </div>
  );
};

export default Logo;
