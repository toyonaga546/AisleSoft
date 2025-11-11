type Props = {
  onClick?: () => void;
};

export const MobileMenuButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label="Open mobile menu"
      className="text-[oklch(1_0_0)] bg-transparent caret-transparent block min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] p-0 md:hidden md:min-h-0 md:min-w-0"
    >
      <img
        src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/icon-1.svg"
        alt="Icon"
        className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
      />
    </button>
  );
};
