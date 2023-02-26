import { TextField } from "@mui/material";
import React from "react";

interface ITextAreaProps {
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
  multiline?: boolean | undefined;
  minRows: number;
  variant: "outlined" | "filled" | "standard";
}

const TextArea = ({
  value,
  handleChange,
  placeholder,
  variant,
  type,
  name,
  margin,
  minRows,
  multiline,
  id,
  isFullWidth,
  error,
  helperText,
}: ITextAreaProps) => {
  return (
    <TextField
      type={type}
      id={id}
      value={value}
      minRows={minRows}
      name={name}
      error={error}
      margin={margin}
      multiline={multiline}
      helperText={helperText}
      onChange={handleChange}
      label={placeholder}
      fullWidth={isFullWidth}
      variant={variant}
    />
  );
};

export default TextArea;
