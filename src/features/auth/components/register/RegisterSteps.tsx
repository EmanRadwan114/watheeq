import CheckIconUI from "@/components/icons/CheckIcon";
import { useTranslations } from "next-intl";
import React from "react";

interface IProps {
  currentStep: number;
}

const RegisterSteps: React.FC<IProps> = ({ currentStep }) => {
  const t = useTranslations("auth.register.steps");

  const stepsData = t.raw("data") as Array<{
    step: string;
    title: string;
    description: string;
  }>;

  const stepsWithComplete = stepsData.map((item) => ({
    isCompleted: currentStep === +item.step,
    ...item,
  }));

  return (
    <div className="flex flex-col items-center gap-3xl">
      <h1 className="heading-5 text-blue-950 relative after:content-[''] after:absolute after:-bottom-2 after:start-0 after:end-0 after:block after:h-[1.5px] after:w-1/4 after:m-auto after:bg-secondary">
        {t("heading")}
      </h1>
      {/* steps data */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-evenly gap-x-md gap-y-lg">
        {stepsWithComplete.map((item) => (
          <div key={item.step} className="flex gap-md">
            <div
              className={`flex items-center justify-center rounded-full size-5xl ${item.isCompleted ? "bg-green-transparent text-brand-green" : "bg-secondary"}`}
            >
              {item.isCompleted ? (
                <CheckIconUI className="size-6 stroke-0 fill-brand-green" />
              ) : (
                <span className="text-white font-semibold">{item.step}</span>
              )}
            </div>
            <div className="flex flex-col gap-sm">
              <p className="body-lg-bold">{item.title}</p>
              <span className="body-md-regular text-third-foreground">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterSteps;
