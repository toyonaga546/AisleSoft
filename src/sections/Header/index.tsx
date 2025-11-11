import { HeaderContainer } from "@/sections/Header/components/HeaderContainer";

export const Header = () => {
  return (
    <header className="fixed backdrop-blur-md bg-[oklab(0.545613_-0.0473512_-0.132002_/_0.95)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] z-50 border-b border-solid border-[oklab(1_0_0_/_0.2)] top-0 inset-x-0">
      {/* Thin blue bar always visible at very top */}
      <div aria-hidden className="h-2 w-full bg-sky-600" />
      <HeaderContainer />
    </header>
  );
};
