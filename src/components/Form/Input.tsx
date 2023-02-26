import { TextField } from "@mui/material";
import React from "react";

interface IInputProps {
  value: string | number;
  handleChange: (e: React.FormEvent) => void;
  id: string;
  helperText: string | false | undefined;
  error: boolean | undefined;
  name: string;
  placeholder: string;
  margin?: "dense" | "normal" | undefined;
  isFullWidth?: boolean | undefined;
  type: "text" | "number";
  variant: "outlined" | "filled" | "standard";
}

const Input = ({
  value,
  handleChange,
  placeholder,
  variant,
  type,
  name,
  margin,
  id,
  isFullWidth,
  error,
  helperText,
}: IInputProps) => {
  return (
    <TextField
      type={type}
      id={id}
      value={value}
      name={name}
      error={error}
      margin={margin}
      helperText={helperText}
      onChange={handleChange}
      label={placeholder}
      fullWidth={isFullWidth}
      variant={variant}
    />
  );
};

export default Input;
