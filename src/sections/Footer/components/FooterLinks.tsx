export type FooterLinksProps = {
  title: string;
  variant: string;
  companyInfo?: {
    established?: string;
    capital?: string;
    ceo?: string;
    philosophy?: string;
    motto?: string;
  };
  links?: Array<{
    text: string;
    href: string;
    hoverUnderline?: boolean;
  }>;
};

export const FooterLinks = (props: FooterLinksProps) => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
      <h4 className="font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
        {props.title}
      </h4>
      {props.variant === "company-info" && props.companyInfo && (
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
          {props.companyInfo.established && (
            <div className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              <span className="text-[oklab(1_0_0_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                設立：
              </span>
              <span className="text-[oklab(1_0_0_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                {props.companyInfo.established}
              </span>
            </div>
          )}
          {props.companyInfo.capital && (
            <div className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              <span className="text-[oklab(1_0_0_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                資本金：
              </span>
              <span className="text-[oklab(1_0_0_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                {props.companyInfo.capital}
              </span>
            </div>
          )}
          {props.companyInfo.ceo && (
            <div className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              <span className="text-[oklab(1_0_0_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                代表取締役：
              </span>
              <span className="text-[oklab(1_0_0_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                {props.companyInfo.ceo}
              </span>
            </div>
          )}
          {props.companyInfo.philosophy && (
            <div className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-2">
              <span className="text-[oklab(1_0_0_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                企業理念：
              </span>
              <span className="text-[oklab(1_0_0_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                {props.companyInfo.philosophy}
              </span>
            </div>
          )}
          {props.companyInfo.motto && (
            <div className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
              <span className="text-[oklab(1_0_0_/_0.6)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                社是：
              </span>
              <span className="text-[oklab(1_0_0_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
                {props.companyInfo.motto}
              </span>
            </div>
          )}
        </div>
      )}
      {props.variant === "links" && props.links && (
        <ul className="box-border caret-transparent list-none outline-[oklab(0.708_0_0_/_0.5)] pl-0">
          {props.links.map((link, index) => (
            <li
              key={index}
              className={`box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] ${index < props.links!.length - 1 ? "mb-2" : ""}`}
            >
              <a
                href={link.href}
                className={`text-[oklab(1_0_0_/_0.8)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] ${link.hoverUnderline ? 'hover:underline' : ''}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
