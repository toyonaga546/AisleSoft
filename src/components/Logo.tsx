type LogoProps = {
  /** when true, apply filter to render logo as white (for dark backgrounds) */
  white?: boolean;
  /** additional classes to apply to the <img> */
  className?: string;
};

export const Logo = ({ white = false, className = '' }: LogoProps) => {
  const imgClasses = `box-border caret-transparent h-8 max-w-full outline-[oklab(0.708_0_/_0.5)] ${className} ${white ? 'filter brightness-0 invert' : ''}`.trim();

  return (
    <img
      src="https://c.animaapp.com/mhsxitn1XA4g5w/assets/0231c09d5d0963c29aa540e836610c0b5f608e5d.png"
      alt="AisleSoft"
      className={imgClasses}
    />
  );
};
