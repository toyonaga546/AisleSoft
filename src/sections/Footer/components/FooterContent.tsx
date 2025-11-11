import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 py-16 md:max-w-screen-xl">
  <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <FooterBrand />
        <FooterLinks
          title="企業情報"
          variant="company-info"
          companyInfo={{
            established: "2003年5月",
            capital: "1,000万円",
            ceo: "市川 満之",
            philosophy: "創見　共創　共働　共育",
            motto: "共に学び　共に創り　共に育つ",
          }}
        />
        {/* Services column removed per request */}
        <FooterLinks
          title="サポート"
          variant="links"
          links={[
            { text: "お問い合わせ", href: "/#contact", hoverUnderline: true },
            { text: "プライバシーポリシー", href: "/privacy.html", hoverUnderline: true },
            { text: "人材募集", href: "/careers.html", hoverUnderline: true },
          ]}
        />
      </div>
      <FooterBottom />
    </div>
  );
};
