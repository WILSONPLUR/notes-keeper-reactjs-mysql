import React from "react";
import { Button as Btn } from "@mui/material";

interface IButtonProps {
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children: React.ReactNode;
  isFullWidth?: boolean | undefined;
  size: "small" | "medium" | "large";
  variant: "contained" | "outlined" | "text";
  disabled?: boolean;
  type?: "submit";
  href?: string;
  onClickHandler?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
  color,
  children,
  isFullWidth,
  size,
  type,
  onClickHandler,
  variant,
  disabled,
  href,
}: IButtonProps) => {
  return (
    <Btn
      color={color}
      variant={variant}
      disabled={disabled}
      size={size}
      type={type}
      href={href}
      onClick={onClickHandler}
      fullWidth={isFullWidth}
    >
      {children}
    </Btn>
  );
};

export default Button;
