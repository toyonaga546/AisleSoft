import React from "react";

export type SectionHeaderProps = {
  title: string;
  description?: React.ReactNode;
  iconUrl?: string;
  variant?: string;
  badge?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className={`box-border caret-transparent ${props.variant ?? ""}`}>
      <div className="flex flex-col items-center text-center box-border caret-transparent gap-y-3">
        {props.iconUrl && (
          <img src={props.iconUrl} alt="" className="h-10 w-10 mb-2" />
        )}
        <div>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-3xl md:text-4xl font-semibold text-sky-600 box-border caret-transparent">{props.title}</h2>
            {props.badge && (
              <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded">{props.badge}</span>
            )}
          </div>
          {props.description && (
            <div className="text-gray-600 text-lg mt-3 box-border caret-transparent max-w-3xl mx-auto">{props.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};
