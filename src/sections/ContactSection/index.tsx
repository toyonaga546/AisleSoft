import { ContactForm } from "@/sections/ContactSection/components/ContactForm";
import { ContactInfo } from "@/sections/ContactSection/components/ContactInfo";

export const ContactSection = () => {
  return (
  <section id="contact" className="scroll-mt-16 bg-[linear-gradient(to_right_bottom,oklch(0.98_0.016_73.684)_0%,oklch(0.971_0.014_343.198)_50%,oklch(0.969_0.015_12.422)_100%)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] py-20">
      <div className="box-border caret-transparent max-w-none outline-[oklab(0.708_0_0_/_0.5)] w-full mx-auto px-6 md:max-w-screen-xl">
        <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] text-center mb-16">
          <h2 className="text-sky-600 text-4xl font-bold box-border caret-transparent leading-10 outline-[oklab(0.708_0_0_/_0.5)] mb-6 md:text-5xl md:leading-[48px]">
            お問い合わせ
          </h2>
          <p className="text-gray-500 text-xl box-border caret-transparent leading-7 max-w-screen-md outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
            プロジェクトのご相談やお見積もりなど、
            どんなことでもお気軽にお問い合わせください。
          </p>
        </div>
        <div className="items-stretch box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};
