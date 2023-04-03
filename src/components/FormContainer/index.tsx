import React from "react";

type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center rounded-[16px] bg-none p-6 sm:max-w-[341px] sm:bg-white lg:shadow md:max-w-[417px]">
      {children}
    </div>
  );
};

export default FormContainer;
