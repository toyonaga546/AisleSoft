import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { DesktopCTA } from "@/sections/Header/components/DesktopCTA";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const HeaderContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 py-4 md:max-w-screen-xl">
      <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
          <Logo />
        </div>
        <DesktopNav />
        <DesktopCTA />
        <MobileMenuButton />
      </div>
    </div>
  );
};
