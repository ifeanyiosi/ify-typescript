import React, { ReactNode } from "react";
import { BiLoaderCircle } from "react-icons/bi";

type Props = {
  label: string;
  disabled: boolean;
  type: "submit" | "button" | "reset";
  display: string;
  prefix: ReactNode;
  suffix: ReactNode;
  loading: boolean;
  onClick: () => void;
  variant: string;
  size: string;
};

const Button = ({
  label,
  disabled,
  type,
  display,
  prefix,
  suffix,
  loading,
  onClick,
  variant,
  size,
}: Props) => {
  let textColor;
  let bgColor;
  let textColorHover;
  let bgColorHover;
  let padding;
  let fontSize;
  let borderColor;
  let borderColorHover;

  switch (variant) {
    case "primary":
      textColor = "text-gray-500";
      textColorHover = "hover:text-white";
      bgColor = "bg-secondary-500";
      bgColorHover = "hover:bg-primary-500";
      borderColor;
      borderColorHover;
      break;

    case "secondary":
      textColor = "text-gray-500";
      borderColor = "border-[#FF6B66]";
      borderColorHover = "hover:border-[#FFA6A3]";
      textColorHover = "hover:text-[#FF6B66]";
      bgColor = "";
      break;

    case "variant":
      textColor = "text-white";
      bgColorHover = "hover:bg-[#FFE1E0]";
      textColorHover = "hover:text-white";
      bgColor = "bg-[#FFA6A3]";
      borderColor;
      borderColorHover;

      break;
    default:
  }

  switch (size) {
    case "sm":
      padding = "px-4 py-3";
      fontSize = "text-base";
      break;

    case "md":
      padding = "px-5 py-5";
      fontSize = "text-sm";
      break;
    default:
  }

  const baseStyle = `${fontSize} ${padding} ${bgColor} ${textColor} ${bgColorHover} ${textColorHover} px-4 py-3 text-[18px] cursor-pointer font-Poppings rounded-lg flex justify-center items-center transition duration-300`;

  const style = `
   ${baseStyle}
   ${display === "inline" ? "inline" : "w-full"}
   ${disabled || loading ? `opacity-50` : null}`;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${style}`}
    >
      {loading ? (
        <span className="animate-spin">
          <BiLoaderCircle className={`${textColor}`} />
        </span>
      ) : (
        <div className="flex items-center">
          {prefix ? <span className="mr-3">{prefix}</span> : null}
          <span>{label}</span>
          {suffix ? <span className="ml-3">{suffix}</span> : null}
        </div>
      )}
    </button>
  );
};

export default Button;
