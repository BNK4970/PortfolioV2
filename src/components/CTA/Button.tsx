import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children?: string | ReactNode;
  link?: string;
  icon?: string;
  value?: string,
  variant?:
    | "solid"
    | "faded"
    | "bordered"
    | "light"
    | "flat"
    | "ghost"
    | "shadow";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  addClassName?: string;
}

const Button: React.FC<Props> = ({
  children,
  link,
  value,
  addClassName,
  radius,
  icon,
  size,
  variant = "solid",
  color = "secondary",
}) => {

  const getColorClasses = (): string => {
    switch (color) {
      case "primary":
        return "var(--primary)"; // RGB equivalent of #007BFF
      case "secondary":
        return "var(--secondary)"; // RGB equivalent of #6C757D
      case "success":
        return "var(--success)"; // RGB equivalent of #28A745
      case "warning":
        return "var(--warning)"; // RGB equivalent of #FFC107
      case "danger":
        return "var(--danger)"; // RGB equivalent of #DC3545
      default:
        return "229, 229, 229"; // RGB equivalent of #E5E5E5
    }
  };
const getVariantClasses = () => {
    switch (variant) {
      // use
      case "solid":
        return `duration-300 bg-[rgb(var(--color))] hover:bg-[rgb(var(--color),0.6)] text-white outline outline-2 outline-[rgb(var(--color))] `;
      case "faded":
        return `duration-300 text-[rgb(var(--color))] opacity-75`;
      // use
      case "bordered":
        return `duration-300 bg-background text-[rgb(var(--foreground))] outline outline-2 outline-[rgb(var(--color))] hover:bg-[rgb(var(--color),0.6)] hover:text-white`;
      case "light":
        return `duration-300 text-[rgb(var(--foreground))] hover:bg-[rgb(var(--color),0.6)]`;
      case "flat":
        return `duration-300 text-[rgb(var(--color))] bg-[rgb(var(--color),0.2)] hover:bg-[rgb(var(--color),0.1)]`;
      case "ghost":
        return `duration-300 text-[rgb(var(--color))] hover:bg-[rgb(var(--color))] outline outline-2 outline-[rgb(var(--color))] hover:text-white`;
      case "shadow":
        return `duration-300 text-white bg-[rgb(var(--color))] hover:bg-[rgb(var(--color),0.8)] shadow-lg`;
      default:
        return ``;
    }
  };
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-6 py-2";
      case "md":
        return "px-6 py-2";
      case "lg":
        return "px-6 py-2";
      case "xl":
        return "px-6 py-2";
      case "full":
        return "px-6 py-2 w-full text-center mx-auto";
      default:
        return "px-6 py-2";
    }
  };
  const getRadiusClasses = () => {
    switch (radius) {
      case "sm":
        return "rounded-sm";
      case "md":
        return "rounded-md";
      case "lg":
        return "rounded-lg";
      case "xl":
        return "rounded-xl";
      case "full":
        return "rounded-full";
      default:
        return "rounded-none";
    }
  };

  const colorValue = getColorClasses();
  const colorStyle = { "--color": colorValue } as React.CSSProperties;
  const classes = `inline-flex items-center ${getSizeClasses()} ${getRadiusClasses()} ${getColorClasses()} ${getVariantClasses()}`;

  const buttonContent = (
    <button style={colorStyle} className={`${classes} ${addClassName}`} value={value}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );

  return link ? <Link href={link}>{buttonContent}</Link> : buttonContent;
};

export default Button;