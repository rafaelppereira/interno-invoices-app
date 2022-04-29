import { useEffect, useRef } from "react";
import { useField } from '@unform/core';

import { Container, Label } from "./styles";

interface InputProps {
  name: string;
  placeholder?: string;
  type: string;
  label?: string;
  value?: string;
  disabled?: boolean;
}

export function Input({ name, placeholder, label, value, ...rest }: InputProps) {
  return (
    <>
      <Label>{label}</Label>
      <Container placeholder={placeholder} value={value} {...rest} />
    </>
  );
}