export type ServiceCardProps = {
  iconUrl: string;
  iconVariant: string;
  title: string;
  description: string;
  arrowIconUrl: string;
  hasMarginBottom?: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  children?: React.ReactNode;
};

import AnimateOnView from "../../../components/AnimateOnView";

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <AnimateOnView
      className={`box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] transition-transform transition-opacity duration-500 ease-out transform hover:-translate-y-1 hover:shadow-lg will-change-transform ${props.hasMarginBottom ? "mb-4" : ""}`}
    >
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
        <div className="box-border caret-transparent gap-x-6 flex flex-col outline-[oklab(0.708_0_0_/_0.5)] gap-y-6 rounded-[14px] border-2 border-solid border-black/10">
          <button
            type="button"
            onClick={props.onClick}
            className="items-start box-border caret-transparent gap-x-1.5 grid auto-rows-min grid-rows-[auto_auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-1.5 pt-6 px-6 text-left cursor-pointer"
            aria-label={props.title}
          >
            <div className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
              <div
                className={`items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent flex shrink-0 h-12 justify-center outline-[oklab(0.708_0_0_/_0.5)] w-12 mr-4 rounded-[10px] ${props.iconVariant}`}
              >
                <img
                  src={props.iconUrl}
                  alt="Icon"
                  className="text-white box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
                />
              </div>
              <div className="box-border caret-transparent basis-[0%] grow outline-[oklab(0.708_0_0_/_0.5)] mr-4">
                <h4 className="text-lg box-border caret-transparent leading-7 outline-[oklab(0.708_0_0_/_0.5)] mb-1">
                  {props.title}
                </h4>
                <p className="text-gray-500 box-border caret-transparent leading-[26px] outline-[oklab(0.708_0_0_/_0.5)]">
                  {props.description}
                </p>
              </div>
              <div className="box-border caret-transparent shrink-0 outline-[oklab(0.708_0_0_/_0.5)]">
                <img
                  src={props.arrowIconUrl}
                  alt="Icon"
                  className={`text-gray-500 box-border caret-transparent h-5 outline-[oklab(0.708_0_0_/_0.5)] w-5 transform transition-transform duration-300 ${props.isOpen ? 'rotate-90' : ''}`}
                />
              </div>
            </div>
          </button>
          <div
            className={`box-border caret-transparent overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out px-6 ${props.isOpen ? 'max-h-[800px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
          >
            {props.children}
          </div>
        </div>
      </div>
    </AnimateOnView>
  );
};
