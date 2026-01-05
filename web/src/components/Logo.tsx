import { cn } from "@/lib/utils";
import SmarteyesLogo from "@/../images/smarteyes-logo-dark.svg";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <img 
      src={SmarteyesLogo} 
      className={cn("h-full w-full object-contain", className)}
      alt="Smarteyes Logo"
    />
  );
}
